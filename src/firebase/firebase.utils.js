import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAlgbA5JxakFhg91UnJhfdGT5d2maJq8u0",
  authDomain: "crwn-clothingdb-a7d72.firebaseapp.com",
  databaseURL: "https://crwn-clothingdb-a7d72.firebaseio.com",
  projectId: "crwn-clothingdb-a7d72",
  storageBucket: "crwn-clothingdb-a7d72.appspot.com",
  messagingSenderId: "990721357292",
  appId: "1:990721357292:web:32c8c4b258a5fbaf2dfcc9",
  measurementId: "G-LV9HCE0GPZ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 