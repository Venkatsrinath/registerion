// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7dSc6hOtEnyB548JaBJZS9T11IiR8jQA",
  authDomain: "function-5d4c1.firebaseapp.com",
  projectId: "function-5d4c1",
  storageBucket: "function-5d4c1.appspot.com",
  messagingSenderId: "133031826915",
  appId: "1:133031826915:web:84119435abd9d99a7e3cd6",
  measurementId: "G-Q8XQ0HBZ68"
};

// Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default firebaseDB.database().ref();