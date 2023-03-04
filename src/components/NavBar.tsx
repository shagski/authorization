import React from "react";
import { Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useActions } from "./../hooks/useActions";

const NavBar: React.FC = () => {
  const router = useNavigate();
  const { IsAuth, user } = useTypeSelector((state) => state.auth);
  const { logout } = useActions();

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
            <Menu.Item onClick={() => router("/login")} key={1}>
              Логин
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default NavBar;
