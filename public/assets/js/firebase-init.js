const firebaseConfig = {
	apiKey: "AIzaSyBKIH6Xfr3Ix-JpMG0hgRqQteI44vVQq8s",
	authDomain: "identifymeapps.firebaseapp.com",
	databaseURL: "https://identifymeapps-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "identifymeapps",
	storageBucket: "identifymeapps.appspot.com",
	messagingSenderId: "927022434226",
	appId: "1:927022434226:web:36a3561cad7d4bdd2286ab"
};

const app = (typeof firebase == "undefined") ? null : firebase.initializeApp(firebaseConfig);