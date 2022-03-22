import React from "react";
import { IRoute, RouteName } from "../types/routes";
import Registration from "../pages/auth/Registration";
import SignIn from "../pages/auth/SignIn";
import StartPage from "../pages/start/StartPage";
import ResultsPage from "../pages/results/ResultsPage";
import StatisticPage from "../pages/statistic/StatisticPage";

export const privateRoutes: IRoute[] = [
  {
    path: RouteName.START_ROUTE,
    Component: <StartPage />,
  },
  {
    path: RouteName.RESULTS_ROUTE,
    Component: <ResultsPage />,
  },
  {
    path: RouteName.STATISTIC_ROUTE,
    Component: <StatisticPage />,
  },
];

export const publicRoutes: IRoute[] = [
  {
    path: RouteName.SIGNIN_ROUTE,
    Component: <SignIn />,
  },
  {
    path: RouteName.REG_ROUTE,
    Component: <Registration />,
  },
];
