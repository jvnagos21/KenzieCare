import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './Style/global';
import UserProvider from './Context/UserContext';


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>
);
