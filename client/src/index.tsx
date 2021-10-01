import App from 'App';
import GlobalStyle from 'globalStyle';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
