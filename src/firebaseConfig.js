import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6VvotsD0ld6JNfguwEwnLpD9eYy7WPeQ",
  authDomain: "netflix-clone-2452d.firebaseapp.com",
  projectId: "netflix-clone-2452d",
  storageBucket: "netflix-clone-2452d.appspot.com",
  messagingSenderId: "594624383448",
  appId: "1:594624383448:web:d1e65c8517cf71cad04aad",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
