import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBpBUEnVLHHpusnvWHPYmxvUHVO9vrOe8A",
    authDomain: "crwn-db-9f550.firebaseapp.com",
    databaseURL: "https://crwn-db-9f550.firebaseio.com",
    projectId: "crwn-db-9f550",
    storageBucket: "",
    messagingSenderId: "964438051447",
    appId: "1:964438051447:web:2841e394eec44501"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); 

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;