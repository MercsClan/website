import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDb5e6NSQ7bnt0QitzgNzQhPW_8wMkc0N8',
  authDomain: 'mercs-clan.firebaseapp.com',
  databaseURL: 'https://mercs-clan.firebaseio.com',
  projectId: 'mercs-clan',
  storageBucket: 'mercs-clan.appspot.com',
  messagingSenderId: '356968984441',
  appId: '1:356968984441:web:9b664e6246f54bd81909a8',
  measurementId: 'G-8VF83LSCRN',
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
