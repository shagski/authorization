import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter: React.FC = () => {
  const auth = true;
  return auth ? (
    <Switch>
      {privateRoutes.map((route) => {
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={route.path}
        />;
      })}
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => {
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={route.path}
        />;
      })}
    </Switch>
  );
};

export default AppRouter;
