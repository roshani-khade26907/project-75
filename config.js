import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDcjCwV-Yayf15ocueu5vwe1SS-in-GC5E",
  authDomain: "e-ride-app-c7f18.firebaseapp.com",
  projectId: "e-ride-app-c7f18",
  storageBucket: "e-ride-app-c7f18.appspot.com",
  messagingSenderId: "371999295431",
  appId: "1:371999295431:web:668efb693e7510a9e53be2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
