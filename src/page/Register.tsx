import { Form, Input, Button } from "antd";

function Register() {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Register</h2>

      <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;