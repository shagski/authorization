import React from "react";
import { Layout, Menu, Row } from "antd";
import { useHistory } from "react-router-dom";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { RouteNames } from "../routes";

const NavBar: React.FC = () => {
  const router = useHistory();
  const { IsAuth, user } = useTypeSelector((state) => state.auth);
  const logout = () => {
    return console.log("cl");
  };

  return (
    <Layout.Header>
      <Row justify="end">
        {IsAuth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={logout} key={1}>
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={1}>
              Логин
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default NavBar;
