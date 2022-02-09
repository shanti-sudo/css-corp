import { AuthProvider } from 'context/authContext';
import { CartProvider } from 'context/CartContext';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './configureStore';

// import AppHook from './AppHook';
import App from './App';
import './root.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
