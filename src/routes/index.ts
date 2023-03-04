import React from "react";
import Login from "../pages/Login";
import Main from "../pages/Main";

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  LOGIN = "/login",
  MAIN = "/",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, element: Login },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.MAIN, element: Main },
];
