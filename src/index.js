import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import StoreProvider from './assets/StoreProvider';
import FirebaseProvider from './assets/FirebaseProvider';
import ForumUiProvider from './assets/ForumUiProvider';

/**
 * Our first component is the FirebaseProvider which is setting up all of firebase.
 * 
 * Once Firebase initializes, we should be checking for a user. If a user exists,
 * pull down their data and place it on the redux store. If a user doesn't exist,
 * create an anonymous user and place it on the redux store. A user should always
 * be authenticated, whether actually logged in or as an anonymous user.
 *
 * We don't want to have a barrier to entry with a login screen, anyone should be
 * able to create at least one theme.
 * 
 * If there is a user, they should have a collection of themes.
 * Example Theme:
 * {
 *   themeName: '',
 *   themeId: '',
 *   sortOrder: 1,
 *   colors: {
 *     key: {
 *       color: '',
 *       order: 1,
 *       isFlat: false,
 *       palette: { 100: '', 200: '', 300: '', 400: '', 500: '', 600: '', 700: '', 800: '' },
 *       title: ''
 *     },
 *     key: {
 *       color: '',
 *       order: 2,
 *       isFlat: true,
 *       palette: { 400: '' },
 *       title: ''
 *     },
 *   },
 *   typography: {
 *     family: 'Josefin Sans, sans-serif',
 *     name: 'Josefin Sans',
 *     baseSize: 16,
 *     lowerRatio: 1,
 *     upperRatio: 1,
 *     variants: ["100", "300", "400", "600", "700"]
 *   },
 *   spacing: {
 *     baseSize: 16,
 *     lowerRatio: 1,
 *     upperRatio: 4,
 *   }
 * }
 * 
 * Next we are setting up the Store Provider, this will take in the data passed in
 * from the FirebaseProvider database and set it as initial state. From that point
 * on, redux is managing state. As the redux store changes, a debounce hook will
 * update Firebase as changes are made to the store.
 * Firebase changes will only update or change the state if authentication changes.
 * 
 * Finally, we wrap our app in a ForumUi Provider that provides the GlobalStyle and theme.
 */


ReactDOM.render(
  <StoreProvider>
    <FirebaseProvider>
      <ForumUiProvider>
        <App />
      </ForumUiProvider>
    </FirebaseProvider>
  </StoreProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
