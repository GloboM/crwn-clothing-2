import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBdyyRXv4sOX_gHTvMt5vbEzLqQv647MZk',
  authDomain: 'react-course-andrei-neagoie.firebaseapp.com',
  projectId: 'react-course-andrei-neagoie',
  storageBucket: 'react-course-andrei-neagoie.appspot.com',
  messagingSenderId: '492500754961',
  appId: '1:492500754961:web:0b3ee577961db95bf307b0',
  measurementId: 'G-83WTT72EF0',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const createUserWithEmailAndPassword = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const createUserProfile = async (userInfo, additionalInfo) => {
  if (!userInfo) return;
  const userRef = firestore.doc(`/users/${userInfo.uid}`);
  const snapshot = await userRef.get();
  const exist = snapshot.exists;
  if (!exist) {
    const { displayName, email } = userInfo;
    const createdAt = new Date();

    try {
      await userRef.set({
        createdAt,
        displayName,
        email,
        ...additionalInfo,
      });
    } catch (err) {
      console.log('error occured while adding the user :', err.message);
    }
  }
  return userRef;
};
export default firebase;
