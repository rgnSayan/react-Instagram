import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDssStrNIwDVchV1ADtQk_Y_yidCtbW05E",
    authDomain: "react-insta-clone-cb7a3.firebaseapp.com",
    projectId: "react-insta-clone-cb7a3",
    storageBucket: "react-insta-clone-cb7a3.appspot.com",
    messagingSenderId: "156683069509",
    appId: "1:156683069509:web:510a48104e9eaaeaffdb2c"
})
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { db, auth, storage };