import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAmwXo3kv1KM2mKCT2vMIktlobU3FHdZ9Y",
    authDomain: "fir-ce217.firebaseapp.com",
    databaseURL: "https://fir-ce217-default-rtdb.firebaseio.com",
    projectId: "fir-ce217",
    storageBucket: "fir-ce217.appspot.com",
    messagingSenderId: "199209949844",
    appId: "1:199209949844:web:027e49daa20d4569cc3281",
    measurementId: "G-Q0V62Q38XQ"
  };

  firebase.initializeApp(firebaseConfig);

  export const db= firebase.firestore()
  export const auth= firebase.auth()

  export default firebase


  