import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Provider } from "react-redux";
import { store } from "./store";
import { getFirestore } from "firebase/firestore";
import App from "./components/app/App";
import { isAsyncFunction } from "util/types";

export const Context: React.Context<any> = createContext(null);

export const app: FirebaseApp | undefined = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = getAuth(app);
export const db = getFirestore(app);

ReactDOM.render(
  <Provider store={store}>
    <Context.Provider value={{ auth, db }}>
      <App />
    </Context.Provider>
  </Provider>,
  document.getElementById("root")
);

// deploy
