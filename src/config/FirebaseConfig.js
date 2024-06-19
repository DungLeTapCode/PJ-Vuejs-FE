// Import the functions you need from the SDKs you need

import firebase from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRhg4j1XVyc_vXsu3yw0ko_mCvEZ4fLxg",
  authDomain: "shopping-cart-1c735.firebaseapp.com",
  databaseURL: "https://shopping-cart-1c735-default-rtdb.firebaseio.com",
  projectId: "shopping-cart-1c735",
  storageBucket: "shopping-cart-1c735.appspot.com",
  messagingSenderId: "434377172071",
  appId: "1:434377172071:web:54725de1abac7acb9ee0c2",
  measurementId: "G-5GH2J91ZQG"
};
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();


  firebase.database().ref("tasks").set({
  "name": "John",
  "age": 18,
  "address": {
    "line1": "100 Mountain View"
  }
});

  export default database;