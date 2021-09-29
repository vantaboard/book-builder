import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyle from './globalStyle';
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
