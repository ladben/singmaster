import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

window.waitForDOMElement = function(selector) {
  // eslint-disable-next-line no-undef
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
            resolve(document.querySelector(selector));
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
  });
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);