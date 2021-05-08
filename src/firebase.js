import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA5Lg_fmUADzUPrPoQdoY4tsvG7B1ffmI4",
    authDomain: "salaryslip-c4984.firebaseapp.com",
    projectId: "salaryslip-c4984",
    storageBucket: "salaryslip-c4984.appspot.com",
    messagingSenderId: "578613490566",
    appId: "1:578613490566:web:7f2ef6173209875ecc3207"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };