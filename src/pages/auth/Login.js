import React, { useState, useEffect } from "react";
// import "./login.styles.scss";
import { Link } from "react-router-dom";
import firebase from 'firebase';
import { Form, Input, Button, Checkbox, Alert } from 'antd';
export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (values) => {
    setLoading(true);
    firebase.auth().signInWithEmailAndPassword(values.email, values.password).then(res => {
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      setError(err.message);
    })
  };
  return (
    <div className="auth-container d-flex justify-content-center align-items-center w-100 ">
      <div className="bordered-container inner-container">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
        >
          <h3>Log in</h3>
          <hr />
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Button htmlType="submit" className="btn btn-dark btn-lg btn-block" loading={loading}>
            Sign in
          </Button>
          {error && <Alert className="mt-2" message={error} type="error" />}
        </Form>
      </div>
    </div>
  );
}
