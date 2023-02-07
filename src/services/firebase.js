import firebase from "firebase/app";
import "firebase/auth";
import { redirect } from "react-router-dom";

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

const githubAuth = new firebase.auth.GithubAuthProvider();
githubAuth.addScope("repo");

function emailSignup(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)

    .then(() => {
      return redirect("/");
    })
    .catch((error) => {
      console.log(error.code, error.message);
    });
}

function emailLogin(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      return redirect("/");
    })
    .catch((error) => {
      console.log(error.code, error.message);
    });
}

function googleLogin() {
  auth.signInWithPopup(googleAuth);
  return redirect("/");
}

function logout() {
  return firebase.auth().signOut();
}

function githubLogin() {
  firebase
    .auth()
    .signInWithPopup(githubAuth)
    .then((result) => {
      const credential = result.credential;

      const githubToken = credential.accessToken;
    })
    .catch((error) => {
      console.log(
        `Code:  ${error.code}
         Message: ${error.message}
         Email: ${error.email}
         Credential: ${error.credential}`
      );
    });
}

export { auth, googleLogin, logout, emailSignup, emailLogin, githubLogin };
