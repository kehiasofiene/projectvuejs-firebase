import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAMYd86g08v_JZI8JpWQjP8XVKPuE_LDi0",
    authDomain: "myprojectvuejs-7de8c.firebaseapp.com",
    databaseURL: "https://myprojectvuejs-7de8c-default-rtdb.firebaseio.com",
    projectId: "myprojectvuejs-7de8c",
    storageBucket: "myprojectvuejs-7de8c.appspot.com",
    messagingSenderId: "537774485916",
    appId: "1:537774485916:web:a7e8af7ae570daf7751859",
    measurementId: "G-PZMFTDNSK6"
  };
  
  // Initialize Firebase
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);



  export default firebaseApp;