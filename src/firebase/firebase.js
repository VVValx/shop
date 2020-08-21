import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgGpSiFK2KDPczi6Cz8ysLMy_aCukCOo0",
  authDomain: "shopping-b16ab.firebaseapp.com",
  databaseURL: "https://shopping-b16ab.firebaseio.com",
  projectId: "shopping-b16ab",
  storageBucket: "shopping-b16ab.appspot.com",
  messagingSenderId: "1034032003495",
  appId: "1:1034032003495:web:25b7de25c9c087343d5e82",
  measurementId: "G-1M9V6ZQV7J",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const googleAuth = () => auth.signInWithPopup(provider);

export default firebase;
