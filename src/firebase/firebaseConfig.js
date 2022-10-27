// import {initializeApp} from 'firebase/app'
// import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
// import { useEffect, useState } from 'react'
// import firebase from 'firebase';

// const config = {
//     apiKey: "AIzaSyB8CB9NLa1vbsREct9x7r2QWNzl0fXx3YA",
//     authDomain: "apparelbase-76671.firebaseapp.com",
//     projectId: "apparelbase-76671",
//     storageBucket: "apparelbase-76671.appspot.com",
//     messagingSenderId: "101281494605",
//     appId: "1:101281494605:web:acb62d132a8456585d8e04",
//     measurementId: "G-S25VVVM4TB"
// };

// const fire = firebase.initializeApp(config);
// export default fire;


  //const auth = getAuth()

//   export function signup(email, password){
//     return createUserWithEmailAndPassword(auth, email, password)
//   }
//   export function login(email,password){
//     return signInWithEmailAndPassword(auth, email,password)
//   }

//   export function useAuth(){
//     const [currentUser, setCurrentUser] = useState()
//     useEffect(()=>{
//         const unbn = onAuthStateChanged(auth, user=>{
//             setCurrentUser(user)
//         })
//         return unbn
//     },[])
//     return currentUser
//   }