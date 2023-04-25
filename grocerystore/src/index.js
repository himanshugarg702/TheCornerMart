import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import store from "./store/store";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import {Auth0Provider} from '@auth0/auth0-react'
ReactDOM.render(
  // <React.StrictMode>
  <Auth0Provider
  domain="dev-ayhnwnwa1ju7n7qc.us.auth0.com"
  clietId="sqMXzquZFsRWdQo3QuO4U00C827cI5cI"
  redirectUri={window.location.origin}
  >
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
    </Auth0Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
 // "start": "react-scripts start",
//  "proxy": "http://localhost:8000",