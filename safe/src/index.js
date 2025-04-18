// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import './index.css';
// import App from './App';
// import { ContextProvider } from './contexts/ContextProvider';

// ReactDOM.render(
//   <ContextProvider>
//     <App />
//   </ContextProvider>,
//   document.getElementById('root'),
// );

import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

// Create the root using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use root.render instead of ReactDOM.render
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
);
