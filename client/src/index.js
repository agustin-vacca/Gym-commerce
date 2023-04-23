import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
//const { DOMAIN, CLIENTID } = process.env
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Auth0Provider 
          domain="dev-a26zs0z2za6hq3cq.us.auth0.com"
          clientId= "bIFzZHia1gmJSmx7WPlNON4QLSpzVLcY"
          redirectUri={ window.location.origin }>
          <App />
        </Auth0Provider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();