// ******************JustApp*****************
// A Custom Messenger App for kids 5 to 16 years old.
// Using React Native, an Expo
//
// Author: Hernan Clarke
// Using Reach Native to build once and deploy on the web - android - ios
// Databse: Goggle Firebase
// Auth:  Google Authenticator
// Storage: Google Storage

import { initializeApp } from 'firebase/app';

export const getFirebaseApp = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyDq4QjTA838nrkBEW9X3i8q6g5-JL0liEY',
    authDomain: 'justapp-hcdcjc.firebaseapp.com',
    projectId: 'justapp-hcdcjc',
    storageBucket: 'justapp-hcdcjc.appspot.com',
    messagingSenderId: '992768148359',
    appId: '1:992768148359:web:0dbcc04b581b3833360922',
    measurementId: 'G-K0NV5HVK5M'
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};
