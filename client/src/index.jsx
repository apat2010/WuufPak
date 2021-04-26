/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Auth0Provider } from "@auth0/auth0-react";
import Header from './components/Header/Header.jsx'

ReactDOM.render(
  <Auth0Provider
  domain="dev-1pw7a3ec.us.auth0.com"
  clientId="CZ45IXwQ2V3hCJK1JhJvYcQM5giTruxa"
  redirectUri={window.location.origin}
>

  <App />
</Auth0Provider>, document.getElementById('app')
);


