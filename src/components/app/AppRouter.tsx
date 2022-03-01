import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../utils/routes";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../../index";
import { RouteName } from "../../types/routes";

const AppRouter: React.FC = () => {
  const { auth } = useContext(Context);
  let [user] = useAuthState(auth);

  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route
        path="*"
        element={<Navigate replace to={RouteName.START_ROUTE} />}
      />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route
        path="*"
        element={<Navigate replace to={RouteName.SIGNIN_ROUTE} />}
      />
    </Routes>
  );
};

export default AppRouter;
