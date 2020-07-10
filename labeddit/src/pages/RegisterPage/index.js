import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Tooltip, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import axios from "axios";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegisterPage = () => {
  const [form] = Form.useForm();

  const criaUsuario = (values) => {
    const body = {
      email: values.email,
      password: values.password,
      username: values.user,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup",
        body
      )
      .then((response) => {
        console.log(response.data);
      });

    console.log("Received values of form: ", values);
    console.log(body);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={criaUsuario}
      scrollToFirstError
    >
      <Form.Item
        name="user"
        label={
          <span>
            Usuário&nbsp;
            <Tooltip title="Como você quer que os outros chamem você?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: "Por favor insira seu Usuário!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "A entrada não é um email válido",
          },
          {
            required: true,
            message: "Por favor insira seu E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Por favor insira sua senha!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                "As duas senhas que você digitou não coincidem!"
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterPage;
