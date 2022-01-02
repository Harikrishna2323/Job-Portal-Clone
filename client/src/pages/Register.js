import React from "react";
import { Row, Col, Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/userActions";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Password from "antd/lib/input/Password";
AOS.init();

function Register() {
  const dispatch = useDispatch();

  function register(values) {
    if (values.password !== values.confirmpassword) {
      message.error("Passwords do not match.");
    } else {
      console.log(values);
      dispatch(registerUser(values));
    }
  }

  return (
    <div className="register">
      <Row justify="center" className="flex align-items-center">
        <Col lg={5}>
          <h1 className="heading1" data-aos="slide-right">
            Jobs
          </h1>
        </Col>
        <Col lg={10} sm={24} className="bs p-5 register-form">
          <h3>Register</h3>
          <hr />
          <Form layout="vertical" onFinish={register}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true }]}>
              <Input type="text" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input type="password" />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmpassword"
              rules={[{ required: true }]}
            >
              <Input type="password" />
            </Form.Item>
            <Button htmlType="submit" className="mb-3">
              Register
            </Button>{" "}
            <br />
            <Link to="/login" className="mt-3">
              Already registered ? , Click here to login
            </Link>
          </Form>
        </Col>
        <Col lg={5}>
          <h1 className="heading2" data-aos="slide-left">
            Now
          </h1>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
