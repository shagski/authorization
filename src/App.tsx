import React from "react";
import "antd/dist/reset.css";
import { Layout } from "antd";
import "./App.css";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <Layout>
      <NavBar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
};

export default App;
