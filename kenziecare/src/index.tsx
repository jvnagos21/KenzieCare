<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './Style/global';
import UserProvider from './Context/UserContext';

=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./Style/global";
import UserProvider from "./Context/UserContext";
>>>>>>> 8fb19f88bc56e27cf3043fad8e9f05c31580498b

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
<<<<<<< HEAD
      <GlobalStyle/>
      <UserProvider>
=======
      <UserProvider>
        <GlobalStyle />
>>>>>>> 8fb19f88bc56e27cf3043fad8e9f05c31580498b
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>
);
