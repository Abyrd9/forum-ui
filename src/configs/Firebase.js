import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCiPHD2ZQMVDpTl3QEe2YoF7TU4pmE0FaQ',
  authDomain: 'forumui-92814.firebaseapp.com',
  databaseURL: 'https://forumui-92814.firebaseio.com',
  projectId: 'forumui-92814',
  storageBucket: 'forumui-92814.appspot.com',
  messagingSenderId: '626447249465',
  appId: '1:626447249465:web:c46aab1a8ee8ab04ce5de8',
  measurementId: 'G-KHP7DMFNNK',
};

export const initializeFirebase = () => {
  firebase.initializeApp(config);
  const firestore = firebase.firestore();
  const settings = { /* your settings... */ timestampsInSnapshots: true };
  firestore.settings(settings);
};
