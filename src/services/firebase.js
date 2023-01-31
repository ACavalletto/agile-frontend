import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCGOJT61beFhq1w_HFhQj73PzUsTFOVwG8",
  authDomain: "agile-group-project.firebaseapp.com",
  projectId: "agile-group-project",
  storageBucket: "agile-group-project.appspot.com",
  messagingSenderId: "877647805889",
  appId: "1:877647805889:web:616fc9c7e6150682324340",
};

firebase.initializeApp(config);

const auth = firebase.auth();
const googleAuth = new firebase.auth.GoogleAuthProvider();

function googleLogin() {
  auth.signInWithPopup(googleAuth);
}

function googleLogout() {
  return auth.signOut();
}

export { auth, googleLogin, googleLogout };
