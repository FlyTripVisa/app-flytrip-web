// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './react-app/App'; // আপনার অ্যাপ কম্পোনেন্টের পাথ
import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
