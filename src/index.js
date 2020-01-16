import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AuthenticationProvider from './firebase/AuthenticationProvider';
import ForumUiProvider from './assets/ForumUiProvider'
import StoreProvider from './state';

ReactDOM.render(
  <AuthenticationProvider>
    <ForumUiProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ForumUiProvider>
  </AuthenticationProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
