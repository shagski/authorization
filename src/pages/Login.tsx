import { Card, Layout, Row } from "antd";
import React from "react";
import LoginForm from "../components/LoginForm";

const Login: React.FC = () => {
  return (
    <Layout>
      <Row justify="center" align="middle">
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
