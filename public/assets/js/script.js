
const myCookie = (name, value = null, days = 0, path = "/") => {
	if(value === null){
		if(document.cookie.length < 1) return;

		return document.cookie.split(": ").reduce((r, v) => {
			const parts = v.split("=");
			return parts[0] === name ? decodeURIComponent(parts[1]) : r;
		});
	}

	let expires = "";
	if(days){
		const date = new Date(Date.now() + days * 864e5).toUTCString();
		expires = "; expires=" + date;
	}

	console.log(name + "=" + encodeURIComponent(value) + expires + "; path=" + path);

	document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=" + path;
}

/*const Cookie = {
	get: name => {
		let c = document.cookie.match(`(?:(?:^|.*; *)${name} *= *([^;]*).*$)|^.*$`)[1];
		if(c) return decodeURIComponent(c);
	},
	set: (name, value, options = {days: 0, path: "/"}) => {
		if(options.days){
			options["max-age"] = options.days * 60 * 60 * 24;
			delete options.days;
		}

		options = Object.entries(options).reduce((accumulatedStr, [q, v]) => `${accumulatedStr}; ${q}=${v}`, "");
		document.cookie = name + "=" + encodeURIComponent(value) + options;
	}
};*/

class DataByForm {
	constructor(formName){
		this._config = {
			sourceForm: formName,
			lastAccess: 0,
			cookieName: "naivebayes"
		};

		this._data = {};
		this.isUpdated();
	}

	isUpdated(){
		const lastAccess = new Date();
		this._config.lastAccess = lastAccess.valueOf();
	}

	changeForm(formName){
		this._config.sourceForm = formName;
		this.isUpdated();
	}

	push(fieldName){
		const field = document.forms[this._config.sourceForm][fieldName];
		if(!field) return;

		this._data[fieldName] = field.value;
		this.isUpdated();
	}

	pull(key = null){
		return (key === null) ? this._data : this._data[key];
	}

	exists(key){
		return this._data.hasOwnProperty(key);
	}

	sync(){
		/*
		 * Up for cookie pass to data
		 * Not Up for data pass to cookie
		 */
		const up = dataLastAccess => {
			const userCookie = myCookie(this._config.cookieName);
			if(userCookie === undefined) return false;

			const cookieLastAccess = JSON.parse(userCookie).lastAccess;
			if(cookieLastAccess < dataLastAccess) return false;

			return true;
		};

		console.log(up(this._config.lastAccess));

		if(up(this._config.lastAccess))
			this._data = JSON.parse(myCookie(this._config.cookieName)).data;

		this.isUpdated();
		const dataToCookie = {
			lastAccess: this._config.lastAccess,
			data: this._data
		};

		myCookie(this._config.cookieName, JSON.stringify(dataToCookie));
	}

	getDataForm(){
		
	}
};

const createAnswerFromTemplate = (name, id, title, isChecked = false) => {
	const component = document.getElementById("answerTemplate").content.cloneNode(true);
	id = name + "-" + id;

	const radio = component.querySelector(".form-check-input");
	radio.setAttribute("name", name);
	radio.setAttribute("id", id);
	if(isChecked) radio.setAttribute("checked", true);

	const label = component.querySelector(".form-check-label");
	label.setAttribute("for", id);
	label.innerText = title;

	return component;
};

const createQuestionFromTemplate = (config = {}) => {
	const importantAttr = ["questionId", "questionTitle", "parent", "headingId", "collapseId", "prevId", "nextId", "answerType", "isShow"];
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

	content.querySelector(".questions-question").innerText = config.questionTitle;
	const answerContainer = content.querySelector(".questions-answer");
	config.answerType.forEach((item, i) => {
		const answerComponent = createAnswerFromTemplate(config.questionId, item.id, item.title, false);
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

const appendQuestion = (containerId, data, accordionParent, ...target) => {
	if(!data.hasOwnProperty("questions") || !data.hasOwnProperty("answerType")) return false;
	const questions = Object.entries(data.questions),
		answerType = data.answerType;

	const parents = target.map((item, index) => {
		const parent = document.createElement("div");
		parent.classList.add("accordion");
		parent.setAttribute("id", containerId + index);
		return parent;
	});

	let j = (parents.length == 1) ? 0 : -1;
	for(let i=0;  i<questions.length; i++){
		if(parents.length > 1 && i % parents.length == questions.length % parents.length) j++;

		const [id, title] = questions[i];
		const component = createQuestionFromTemplate({
			questionId: id,
			questionTitle: title,
			parent: accordionParent,
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

		if(component) parents[j].appendChild(component);
	}

	parents.forEach((parent, index) => {
		target[index].appendChild(parent);
	});
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