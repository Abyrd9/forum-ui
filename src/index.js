import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FirebaseProvider from './firebase/FirebaseProvider';
import ForumUiProvider from './assets/ForumUiProvider';
import StoreProvider from './state';

ReactDOM.render(
  <FirebaseProvider>
    <ForumUiProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ForumUiProvider>
  </FirebaseProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
