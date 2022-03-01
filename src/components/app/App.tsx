import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import AuthProvider from "../../context/AuthContext";
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
