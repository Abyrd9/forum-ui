import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import useDeepCompareEffect from '../hooks/useDeepCompareEffect';

firebase.initializeApp({
  apiKey: 'AIzaSyCiPHD2ZQMVDpTl3QEe2YoF7TU4pmE0FaQ',
  authDomain: 'forumui-92814.firebaseapp.com',
  databaseURL: 'https://forumui-92814.firebaseio.com',
  projectId: 'forumui-92814',
  storageBucket: 'forumui-92814.appspot.com',
  messagingSenderId: '626447249465',
  appId: '1:626447249465:web:c46aab1a8ee8ab04ce5de8',
  measurementId: 'G-KHP7DMFNNK',
});

const db = firebase.firestore();
export const FirebaseContext = React.createContext({});

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unlisten = firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unlisten();
    };
  }, []);

  useDeepCompareEffect(() => {
    if (user) {
      const ref = db.collection('users').doc(user.uid);
      ref.get().then(doc => {
        if (!doc.exists) {
          ref.set({
            email: user.email,
            uid: user.uid,
          });
        }
      });
    }
  }, [user]);

  return (
    <FirebaseContext.Provider value={{ user, database: db }}>{children}</FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
