import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ScrollProvider } from './context/scroll-context';
import { CartProvider } from './context/cart-context';
import { LocationProvider } from './context/location-context';
import { WebsiteProvider } from './context/website-context';

ReactDOM.render(
  <React.StrictMode>
    <ScrollProvider>
      <WebsiteProvider>
        <LocationProvider>
          <CartProvider>

          <App />

          </CartProvider>
        </LocationProvider>
      </WebsiteProvider>
    </ScrollProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
