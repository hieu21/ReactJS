import { Form, Input, Button, Checkbox } from "antd";
import axios from "axios";
import React from "react";
const LoginPage = ({ setToken }) => {
  const onFinish = (values) => {
    console.log("Success:", values);

    axios
      .get(`https://60dff0ba6b689e001788c858.mockapi.io/token`)
      .then((response) => {
        setToken({
          name: response.data.token,
          id: response.data.userId,
        });
        axios.defaults.headers.common['Authorization'] = `${response.data.token}`;
        console.log(response.data.token);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 6,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
          {
            type: "email",
            message: "Please input email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
          {
            min: 8,
            message: "Please input at least 8 characters!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 10,
          span: 20,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 10,
          span: 20,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginPage;
