import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';

//style
import './assets/styles/root.sass';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);