import React from "react";
import "antd/dist/reset.css";
import { Layout } from "antd";
import "./App.css";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { useActions } from "./hooks/useActions";
import { IUser } from "./moduls/IUser";

const App: React.FC = () => {
  const { setUser, setIsAuth } = useActions();

  React.useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") } as IUser);
      setIsAuth(true);
    }
  }, []);

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
