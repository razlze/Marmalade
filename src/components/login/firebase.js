import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp({
  apiKey: "AIzaSyCqgpm3jRNwX2fQc36ELm9l4tj3Y1KkHVk",
  authDomain: "cjrv-hackthecloud.firebaseapp.com",
  databaseURL: "https://cjrv-hackthecloud-default-rtdb.firebaseio.com",
  projectId: "cjrv-hackthecloud",
  storageBucket: "cjrv-hackthecloud.appspot.com",
  messagingSenderId: "541279715663",
  appId: "1:541279715663:web:6256bac87216684595053a",
  measurementId: "G-3Z9FKKG1GB"
})

/*
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      console.log("signed in");
      window.location.href = '/positions';
  } else {
      console.log("not signed in");
  }
})
*/

export default firebase;