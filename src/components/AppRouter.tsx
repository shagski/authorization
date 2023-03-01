import React from "react";
import { Routes, Route } from "react-router-dom";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { privateRoutes, publicRoutes, RouteNames } from "../routes";

const AppRouter: React.FC = () => {
  const { IsAuth } = useTypeSelector((state) => state.auth);

  return IsAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key={route.path}
        />
      ))}
      {/* <Redirect to={RouteNames.MAIN} /> */}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          exact={route.exact}
          component={route.component}
          key={route.path}
        />
      ))}
      {/* <Redirect to={RouteNames.LOGIN} /> */}
    </Routes>
  );
};

export default AppRouter;
