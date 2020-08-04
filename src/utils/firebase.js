import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBc7DUJSBR-x8mqgJSyOH6i8JENC4HqluQ",
    authDomain: "clone-28018.firebaseapp.com",
    databaseURL: "https://clone-28018.firebaseio.com",
    projectId: "clone-28018",
    storageBucket: "clone-28018.appspot.com",
    messagingSenderId: "1084045755894",
    appId: "1:1084045755894:web:b199052ce330cfdacff3d7"
});

const auth = firebase.auth();

export { auth };
