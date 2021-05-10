import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBFhJsmdAirbA_kdVrlp5VztQ0mzu0VBv4",
    authDomain: "salary-slip-35a4b.firebaseapp.com",
    projectId: "salary-slip-35a4b",
    storageBucket: "salary-slip-35a4b.appspot.com",
    messagingSenderId: "291647738956",
    appId: "1:291647738956:web:38883122da95e1f78ed0e9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };