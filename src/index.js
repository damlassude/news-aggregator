import React from 'react';
import ReactDOM from 'react-dom/client'; // 'react-dom/client' kullanıyoruz
import App from './App';
import './index.css';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot kullanıyoruz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


