import React from "react";

export enum RouteName {
  START_ROUTE = "/",
  SIGNIN_ROUTE = "/signin",
  REG_ROUTE = "/registration",
  RESULTS_ROUTE = "/results",
  STATISTIC_ROUTE = "/statistic",
}

export interface IRoute {
  path: string;
  Component: React.ReactElement;
}
