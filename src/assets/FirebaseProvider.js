import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import useDeepCompareEffect from '../hooks/useDeepCompareEffect';
import { StoreContext, ACTION_TYPES } from './StoreProvider';
import buildThemePayload from '../helpers/buildThemePayload';

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
  const { store, dispatch } = useContext(StoreContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unlisten = firebase.auth().onAuthStateChanged(authUser => {
      const payload = authUser || null;
      setUser(payload);
    });
    return () => {
      unlisten();
    };
  }, []);

  useDeepCompareEffect(() => {
    if (user) {
      const userRef = db.collection('users').doc(user.uid);
      userRef.get().then(doc => {
        const isNewUser = doc.exists;
        if (isNewUser) {
          const themesRef = userRef.collection('themes');
          dispatch({ type: ACTION_TYPES.SET_INITIAL_THEME, themeId: themesRef.doc() });
          userRef.set({ email: user.email, uid: user.uid });
        } else {
          userRef.collection('themes').get().then(snapshot => {
            if (snapshot.docs.length > 0) {
              dispatch({
                type: ACTION_TYPES.SET_INITIAL_THEME,
                themeId: snapshot.docs[0].id,
                theme: snapshot.docs[0].data(),
              });
            }
          })
        }
      });
    }
  }, [user]);

  return (
    <FirebaseContext.Provider value={{ user, database: db }}>{children}</FirebaseContext.Provider>
  );
};

FirebaseProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default FirebaseProvider;
