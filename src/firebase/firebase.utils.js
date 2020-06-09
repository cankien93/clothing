import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// insert your own config
const config = {
    apiKey: "AIzaSyDSYB_WRAU99OWkkPYEJkO1a-6h-HSM0Kc",
    authDomain: "clothing-ecomerce-ccd29.firebaseapp.com",
    databaseURL: "https://clothing-ecomerce-ccd29.firebaseio.com",
    projectId: "clothing-ecomerce-ccd29",
    storageBucket: "clothing-ecomerce-ccd29.appspot.com",
    messagingSenderId: "150691446855",
    appId: "1:150691446855:web:d30017a8b088199668b162",
    measurementId: "G-RYBLV10WB5"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
    
  }
  return  userRef;
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;