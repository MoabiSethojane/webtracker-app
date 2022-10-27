import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const config = {
    apiKey: "AIzaSyB8CB9NLa1vbsREct9x7r2QWNzl0fXx3YA",
    authDomain: "apparelbase-76671.firebaseapp.com",
    projectId: "apparelbase-76671",
    storageBucket: "apparelbase-76671.appspot.com",
    messagingSenderId: "101281494605",
    appId: "1:101281494605:web:acb62d132a8456585d8e04",
    measurementId: "G-S25VVVM4TB"
};

const fire = firebase.initializeApp(config);

const firestore = fire.firestore();
export default fire;


