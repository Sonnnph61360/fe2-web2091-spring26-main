import { Form, Input, Button } from "antd";

function Login() {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>

      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;