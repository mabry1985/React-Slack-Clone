import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAxxo2cJTF9ism4d5JRkhxXcZ_g74pVPac",
  authDomain: "slack-6f481.firebaseapp.com",
  databaseURL: "https://slack-6f481.firebaseio.com",
  projectId: "slack-6f481",
  storageBucket: "slack-6f481.appspot.com",
  messagingSenderId: "611537633362",
  appId: "1:611537633362:web:de908768a8ce9a2d9e1f8b"
};

firebase.initializeApp(firebaseConfig);

export default firebase;