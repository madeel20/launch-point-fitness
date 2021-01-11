import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDTdJF4vU2GO82NkESZOQLyGOtF0X5xD1Q",
    authDomain: "launch-point-fitness.firebaseapp.com",
    projectId: "launch-point-fitness",
    storageBucket: "launch-point-fitness.appspot.com",
    messagingSenderId: "888410776285",
    appId: "1:888410776285:web:0ee7a967c6fc583b56b134"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const database = firebase.database();
