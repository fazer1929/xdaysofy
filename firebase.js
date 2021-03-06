var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

var firebaseConfig = {
	apiKey: "AIzaSyBOAjuHkRqODYXfi_UrXaC3Zd_QMnjL-sI",
	authDomain: "xdaysofcode-18d50.firebaseapp.com",
	projectId: "xdaysofcode-18d50",
	storageBucket: "xdaysofcode-18d50.appspot.com",
	messagingSenderId: "805798180786",
	appId: "1:805798180786:web:ceeb65e03e530e432d16ab",
	measurementId: "G-CW3F76MV2N",
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

module.exports = fb;
