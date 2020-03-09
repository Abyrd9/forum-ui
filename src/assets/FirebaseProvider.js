import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import useDeepCompareEffect from "../hooks/useDeepCompareEffect";
import useDebounce from "../hooks/useDebounce";
import { StoreContext, ACTION_TYPES } from "./StoreProvider";
import {
  INITIAL_COLORS,
  INITIAL_SPACING,
  INITIAL_TYPOGRAPHY
} from "../constants";

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
const db = firebase.firestore();
export const FirebaseContext = React.createContext({});

const FirebaseProvider = ({ children }) => {
  const { store, dispatch } = useContext(StoreContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged(authUser => {
      const userPayload = authUser || null;
      setUser(userPayload);
    });
    return () => {
      unlisten();
    };
  }, []);

  useDeepCompareEffect(() => {
    // if there is no user, sign in anonymously
    if (!user) {
      auth.signInAnonymously().catch(err => {
        console.error(err.code, err.message);
      })
    } else {
      const userRef = db.collection("users").doc(user.uid);
      userRef.get().then(doc => {
        const isNewUser = !doc.exists;
        if (isNewUser) {
          const themesRef = userRef.collection("themes").doc();
          const newTheme = {
            colors: INITIAL_COLORS,
            spacing: INITIAL_SPACING,
            typography: INITIAL_TYPOGRAPHY,
            sortOrder: 1,
            themeName: "Default Theme",
            themeId: themesRef.id,
          };
          userRef.set({ email: user.email, uid: user.uid });
          themesRef.set(newTheme);
          dispatch({ type: ACTION_TYPES.SET_INITIAL_THEME, newTheme });
        } else {
          userRef
            .collection("themes")
            .get()
            .then(snapshot => {
              if (snapshot.docs.length > 0) {
                dispatch({
                  type: ACTION_TYPES.SET_INITIAL_THEME,
                  theme: snapshot.docs[0].data()
                });
              }
            });
        }
      });
    }
  }, [user]);

  useDebounce(() => {}, store, 1000);

  return (
    <FirebaseContext.Provider value={{ user, database: db, authentication: auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};

FirebaseProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default FirebaseProvider;
