import { getDatabase, ref, onValue,get,child } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBsRIcqSYI5PCylM-MjlsagvhsEkT2OmgY',
  authDomain: 'wleel-gsm.firebaseapp.com',
  databaseURL: 'https://wleel-gsm-default-rtdb.firebaseio.com',
  projectId: 'wleel-gsm',
  storageBucket: 'wleel-gsm.appspot.com',
  messagingSenderId: '504787437889',
  appId: '1:504787437889:web:7a434bf28636a786c8b9c0',
  measurementId: 'G-0557T4RH63',
};

const app = initializeApp(firebaseConfig);

const db = getDatabase();

export { db, app, ref,get, onValue,child };
