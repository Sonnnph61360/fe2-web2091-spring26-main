import { Form, Input, Button } from "antd";

function Add() {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add User</h2>

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
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;