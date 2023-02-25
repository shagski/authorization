import React from "react";
import Login from "../pages/Login";
import Main from "../pages/Main";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = "/login",
  MAIN = "/",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, component: Login, exact: true },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.MAIN, component: Main, exact: true },
];
