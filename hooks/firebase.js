import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAK48Eq9nnz132nKBlZq0PDVtYJzFBr4mo",
  authDomain: "codeandchillax.firebaseapp.com",
  projectId: "codeandchillax",
  storageBucket: "codeandchillax.appspot.com",
  messagingSenderId: "13520489641",
  appId: "1:13520489641:web:f849d36ce2e3c2aebfadb8",
  measurementId: "G-6REKZ6Y7Q7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const google_provider = new GoogleAuthProvider();
const facebook_provider = new FacebookAuthProvider();
const github_provider = new GithubAuthProvider();

export { auth, google_provider, facebook_provider, github_provider };