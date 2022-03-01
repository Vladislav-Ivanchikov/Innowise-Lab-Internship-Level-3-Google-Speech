import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import App from "./components/app/App";
import { Provider } from "react-redux";
import { store } from "./store";

export const Context: React.Context<any> = createContext(null);

export const app: FirebaseApp | undefined = initializeApp({
  apiKey: "AIzaSyCm3rwaxzhIjiSDGiRWFBB9v1PzVuJ_-RE",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = getAuth(app);

ReactDOM.render(
  <Provider store={store}>
    <Context.Provider value={{ auth }}>
      <App />
    </Context.Provider>
  </Provider>,
  document.getElementById("root")
);
