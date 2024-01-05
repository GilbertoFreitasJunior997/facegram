import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDcZVR0b0LVbANLT8CfXT7t6StT_uUziDg',
  authDomain: 'facegram-v1-ef719.firebaseapp.com',
  projectId: 'facegram-v1-ef719',
  storageBucket: 'facegram-v1-ef719.appspot.com',
  messagingSenderId: '684282048863',
  appId: '1:684282048863:web:2ed383e2a5948e163946ea',
};

export const firebaseApp = initializeApp(FIREBASE_CONFIG);
export const firebaseStorage = getStorage(firebaseApp);
export const firestore = getFirestore(firebaseApp);

