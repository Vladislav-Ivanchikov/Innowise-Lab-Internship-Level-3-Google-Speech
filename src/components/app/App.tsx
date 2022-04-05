import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../../context/AuthContext";
import AppRouter from "./AppRouter";
import { AppStyle } from "./App.style";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppStyle />
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
