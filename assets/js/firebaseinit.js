// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYI-l8T7XMOg0uyA6kYh_pwsMKIe69E2w",
    authDomain: "sac-election.firebaseapp.com",
    projectId: "sac-election",
    databaseURL: "https://sac-election.firebaseio.com",
    storageBucket: "sac-election.appspot.com",
    messagingSenderId: "776554159211",
    appId: "1:776554159211:web:08cb53a72553d5b6f8252e",
    measurementId: "G-HDZWHJGV1V"
};

// Initialize Firebase
const frbApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
 