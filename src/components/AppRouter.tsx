import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useTypeSelector } from "../hooks/useTypeSelector";
import Main from "../pages/Main";
import { privateRoutes, publicRoutes, RouteNames } from "../routes";
import Login from "./../pages/Login";

const AppRouter: React.FC = () => {
  const { IsAuth } = useTypeSelector((state) => state.auth);

  return IsAuth === true ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={<Main />} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={<Login />} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
