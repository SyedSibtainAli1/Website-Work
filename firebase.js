import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBnCgw6RzLvMnGi0CR2PGCF65KKqJE-Fc8",
    authDomain: "bragtime-d87ef.firebaseapp.com",
    projectId: "bragtime-d87ef",
    storageBucket: "bragtime-d87ef.appspot.com",
    messagingSenderId: "214249802642",
    appId: "1:214249802642:web:79a625a73838176ace4f4b",
    measurementId: "G-8SPQ2XZ1M3"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;