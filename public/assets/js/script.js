/*const myCookie = (name, value = null, days = 0, path = "/") => {
	if(value === null){
		if(document.cookie.length < 1) return;

		const dataCookie = document.cookie.split(": ").reduce((r, v) => {
			const parts = v.split("=");
			return parts[0] === name ? parts[1] : r;
		}).replace(name + "=", "");

		return decodeURIComponent(dataCookie);
	}

	let expires = "";
	if(days){
		const date = new Date(Date.now() + days * 864e5).toUTCString();
		expires = "; expires=" + date;
	}

	document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=" + path;
	console.log("Success to set Cookie: " + myCookie(name))
}*/

class DataForm {
	static join(...dataForm){
		const notValid = dataForm.findIndex(df => typeof df.isDataForm == "undefined") >= 0;
		if(notValid){
			console.error("The Parameters must be instance by DataForm");
			return;
		}

		let result = {};
		dataForm.forEach(df => {
			const data = df.get();
			Object.entries(data).forEach(([key, val]) => result[key] = val);
		});

		return result;
	}

	constructor(formName){
		this._config = {
			sourceForm: formName,
			lastAccess: 0,
			cookieName: "identifyMe-" + formName
		};

		this._data = {};
		this.isDataForm = true;
	}

	isUpdated(){
		const lastAccess = new Date();
		this._config.lastAccess = lastAccess.valueOf();
	}

	isEmpty(){
		return Object.values(this._data).length < 1;
	}

	changeForm(formName){
		this._config.sourceForm = formName;
		this.isUpdated();
	}

	exists(key){
		return this._data.hasOwnProperty(key);
	}

	get(key = null){
		return (key === null) ? this._data : this._data[key];
	}

	push(fieldName){
		const field = document.forms[this._config.sourceForm][fieldName];
		if(!field) return;

		this._data[fieldName] = field.value;
		this.isUpdated();
	}

	pushAll(){
		const form = document.forms[this._config.sourceForm];
		if(!form) return;

		const formData = new FormData(form);
		formData.forEach((value, key) => {
			if(value.length > 0) this._data[key] = value;
		});

		this.isUpdated();
	}

	reset(){
		this._data = {};
		this.isUpdated();
	}

	fillForm(){
		Object.entries(this.get()).forEach(([key, val]) => {
			const elm = document.forms[this._config.sourceForm][key];
			if(elm) elm.value = val;
		});
	}

	resetForm(){
		document.forms[this._config.sourceForm].reset();
	}

	readFromSession(){
		const data = sessionStorage[this._config.cookieName];
		if(!data) return;
		return JSON.parse(data);
	}

	writeToSession(){
		let data = {
			lastAccess: this._config.lastAccess,
			data: this._data
		};

		data = JSON.stringify(data);
		sessionStorage.setItem(this._config.cookieName, data);
	}

	sync(){
		/*
		 * Up for cookie pass to data
		 * Not Up for data pass to cookie
		 */
		const up = dataLastAccess => {
			let userSessionData = this.readFromSession();
			if(userSessionData === undefined || userSessionData.lastAccess < dataLastAccess) return false;
			return true;
		};

		if(up(this._config.lastAccess))
			this._data = this.readFromSession().data;

		this.isUpdated();
		this.writeToSession();
	}
};

const createAnswerFromTemplate = (name, id, title, isRequired = false) => {
	const component = document.getElementById("answerTemplate").content.cloneNode(true);
	id = name + "-" + id;

	const radio = component.querySelector(".form-check-input");
	radio.setAttribute("name", name);
	radio.setAttribute("id", id);
	radio.setAttribute("value", title);
	if(isRequired) radio.setAttribute("required", true);

	const label = component.querySelector(".form-check-label");
	label.setAttribute("for", id);
	label.innerText = title;

	return component;
};

const createQuestionFromTemplate = (config = {}) => {
	const importantAttr = ["questionId", "choices", "parent", "headingId", "collapseId", "prevId", "nextId", "answerType", "isShow"];
	const valid = typeof config == "object" && importantAttr.every(prop => config.hasOwnProperty(prop));
	if(!valid) return false;

	const component = document.getElementById("questionTemplate").content.cloneNode(true);
	const heading = component.querySelector(".accordion-header"),
		content = component.querySelector(".accordion-collapse");

	heading.setAttribute("id", "questionHeading-" + config.id);
	
	content.setAttribute("id", config.collapseId);
	content.classList.add("collapse");
	if(config.isShow) content.classList.add("show");
	content.setAttribute("aria-labelledBy", config.headingId);
	content.setAttribute("data-bs-parent", config.parent);

	Object.entries(config.choices).forEach(([choiceId, choice]) => {
		content.querySelector(`.card[data-choice="${choiceId}"] h4`).innerText = choiceId.toUpperCase();
		content.querySelector(`.card[data-choice="${choiceId}"] p`).innerText = choice;
	});
	const answerContainer = content.querySelector(".questions-answer");
	config.answerType.forEach((item, i) => {
		const isRequired = i === 0;
		const answerComponent = createAnswerFromTemplate(config.questionId, item.id, item.title, isRequired);

		answerContainer.appendChild(answerComponent);
	});

	const togglers = [{
		elm: function(){
			return component.querySelector(".accordion-button")
		},
		title: config.headingTitle,
		target: config.collapseId,
		expanded: config.isShow.toString()
	}, {
		elm: function(){
			return content.querySelector(".questions-prev");
		},
		target: config.prevId,
		expanded: "false"
	}, {
		elm: function(){
			return content.querySelector(".questions-next");
		},
		target: config.nextId,
		expanded: "false"
	}];

	togglers.forEach(toggler => {
		if(toggler.target === false){
			toggler.elm().setAttribute("disabled", "true");
			return;
		}

		toggler.elm().setAttribute("data-bs-toggle", "collapse");
		toggler.elm().setAttribute("data-bs-target", "#" + toggler.target);
		toggler.elm().setAttribute("aria-expanded", toggler.expanded);
		toggler.elm().setAttribute("aria-controls", toggler.target);

		if(toggler.hasOwnProperty("title")) toggler.elm().innerText = toggler.title;
	});

	return component;
};

const appendQuestion = (containerId, data, target) => {
	if(!data.hasOwnProperty("questions") || !data.hasOwnProperty("answerType")) return false;
	const questions = Object.entries(data.questions),
		answerType = data.answerType;

	const parent = document.createElement("div");
	parent.classList.add("accordion");
	parent.setAttribute("id", containerId);

	for(let i=0;  i<questions.length; i++){
		// const [id, title] = questions[i];
		const [id, choices] = questions[i];
		const component = createQuestionFromTemplate({
			questionId: id,
			choices: choices,
			parent: "#" + containerId,
			headingId: "questionHeading-" + id,
			headingTitle: `Pertanyaan ${i + 1}`,
			collapseId: "questionCollapse-" + id,
			prevId: (i == 0) ? false : `questionCollapse-${questions[i - 1][0]}`,
			nextId: (i == questions.length - 1) ? false : `questionCollapse-${questions[i + 1][0]}`,
			answerType: Object.entries(answerType).map(item => {
				return {id: item[0], title: item[1]};
			}),
			isShow: (i === 0)
		});

		if(component) parent.appendChild(component);
	}

	target.appendChild(parent);
};

const loader = {
	elm: document.getElementById("loaderModal"),
	show: function(){
		this.elm.classList.add("is-show");
		return this;
	},
	hide: function(){
		this.elm.classList.remove("is-show");
		return this;
	},
	toggle: function(){
		this.elm.classList.toggle("is-show");
		return this;
	},
	isLoading: function(isLoading = true){
		if(isLoading) this.elm.classList.add("is-loading");
		else this.elm.classList.remove("is-loading");
		return this;
	},
	isError: function(isError = true, messege = null){
		if(isError) this.elm.classList.add("is-error");
		else this.elm.classList.remove("is-error");

		if(messege !== null)
			this.elm.querySelector(".error-component").innerText = messege;
		return this;
	},
	reset: function(){
		this.isError(false, "");
		this.isLoading(false);
		this.hide();
		return this;
	}
};