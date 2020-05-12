import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import { uuid } from "uuidv4";
import isEmpty from "lodash.isempty";
import useDeepCompareEffect from "../hooks/useDeepCompareEffect";
import {
  INITIAL_COLORS,
  INITIAL_SPACING,
  INITIAL_TYPOGRAPHY
} from "../constants";
import Loading from "../components/Utilities/Loading";

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

const DEFAULT_KEY = uuid();
const DEFAULT_THEME = {
  colors: INITIAL_COLORS,
  spacing: INITIAL_SPACING,
  typography: INITIAL_TYPOGRAPHY,
  sortOrder: 1,
  themeName: "Default Theme"
};

const FirebaseProvider = ({ children }) => {
  const [appLoading, toggleAppLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userThemes, setUserThemes] = useState(null);

  // Authentication state change listener
  useEffect(() => {
    toggleAppLoading(true);
    const unlisten = auth.onAuthStateChanged(authUser => {
      const userPayload = authUser || null;
      setUserData(userPayload);
      toggleAppLoading(false);
    });
    return () => {
      unlisten();
    };
  }, []);

  // If a user does sign in, set their database data to state
  useDeepCompareEffect(() => {
    if (!isEmpty(userData)) {
      const userRef = db.collection("users").doc(userData.uid);
      userRef.get().then(doc => {
        const isNewUser = !doc.exists;
        if (isNewUser) {
          const themesRef = userRef.collection("themes").doc();

          userRef.set({ email: userData.email, uid: userData.uid });
          const theme = { ...DEFAULT_THEME, themeId: themesRef.id };
          themesRef.set(theme);

          setUserThemes({ [themesRef.id]: theme });
        } else {
          userRef
            .collection("themes")
            .get()
            .then(snapshot => {
              if (snapshot.docs.length > 0) {
                const themes = snapshot.docs
                  .sort((a, b) => {
                    return a.data().sortOrder - b.data().sortOrder;
                  })
                  .reduce((acc, themeDoc) => {
                    const theme = themeDoc.data();
                    acc = { ...acc, [theme.themeId]: theme }; // eslint-disable-line
                    return acc;
                  }, {});
                setUserThemes(themes);
              }
            });
        }
      });
    } else {
      // If there's no user themes and no users, set a default theme
      setUserThemes({
        [DEFAULT_KEY]: { ...DEFAULT_THEME, themeId: DEFAULT_KEY }
      });
    }
  }, [userData]);

  return (
    <FirebaseContext.Provider value={{ userData, userThemes }}>
      {appLoading ? <Loading /> : children}
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
