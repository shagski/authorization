import { Button, Form, Input } from "antd";
import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { rules } from "../utils/rules";

const LoginForm: React.FC = () => {
  const { error, isLoading } = useTypeSelector((state) => state.auth);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login } = useActions();

  const submit = () => {
    login(username, password);
    console.log("start");
  };

  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required("Пожалуйста введите имя пользователя!")]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required("Пожалуйста введите пароль!")]}
      >
        <Input value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
