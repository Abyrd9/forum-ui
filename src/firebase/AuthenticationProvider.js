import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyCiPHD2ZQMVDpTl3QEe2YoF7TU4pmE0FaQ",
  authDomain: "forumui-92814.firebaseapp.com",
  databaseURL: "https://forumui-92814.firebaseio.com",
  projectId: "forumui-92814",
  storageBucket: "forumui-92814.appspot.com",
  messagingSenderId: "626447249465",
  appId: "1:626447249465:web:c46aab1a8ee8ab04ce5de8",
  measurementId: "G-KHP7DMFNNK"
});

const auth = firebase.auth();

export const AuthenticationContext = React.createContext({});
const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unlisten = firebase.auth().onAuthStateChanged(
      authUser => {
        if (authUser) {
          setUser(authUser)
        } else {
          setUser(null);
        }
      }
    );
    return () => {
      unlisten();
    }
  }, []);
  return (
    <AuthenticationContext.Provider value={{ auth, user }}>{children}</AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;