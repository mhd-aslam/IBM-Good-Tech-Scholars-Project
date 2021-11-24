import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHzYt_s3lUG_SNXxzKUHQodk9CsVA_uqc",
  authDomain: "ibm-good-tech-scholar.firebaseapp.com",
  projectId: "ibm-good-tech-scholar",
  storageBucket: "ibm-good-tech-scholar.appspot.com",
  messagingSenderId: "38215802920",
  appId: "1:38215802920:web:2ad01b60c611457a67151d",
  measurementId: "G-B107HP4Q5P",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
