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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot =  await userRef.get();
    
    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log('error createing user', error.message);
        }
    }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); 

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;