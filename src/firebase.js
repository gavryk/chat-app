import firebase from "firebase/app";
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDF1HrAV_jZYktIM0OLAD4YKycDs8ACYRw",
    authDomain: "bella-chat-2a6f0.firebaseapp.com",
    projectId: "bella-chat-2a6f0",
    storageBucket: "bella-chat-2a6f0.appspot.com",
    messagingSenderId: "59765009690",
    appId: "1:59765009690:web:15795600382a40ca4090a3"
}).auth();