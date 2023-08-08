import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesContexProvider } from './store/favorites-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesContexProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContexProvider>
);
