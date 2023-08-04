// Imports
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import PageBanner from "../../pagebanner/PageBanner";
import { Form, Modal, Input, Button } from "antd";

// Images
import pageImage from "../../../img/loginDash/greyPAl.jpg";

// Stylesheets
import "./LoginPage.css";

function Login() {

  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  const onFinish = (values) => {
    logInWithEmailAndPassword(values["email"], values["password"]).then(
      (result) => {
        if (result == "Invalid password or email") {
          return Modal.error({
            title: "Login Failed",
            content:
              "Either your email or passoword is incorrect. Please try again. If you have submitted more than 3 incorrect attempts please contact an administrator.",
          });
        }
      }
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <PageBanner
        image={pageImage}
        title="Staff Login Portal"
        subtitle="The place where blog making happens."
      />
      <div className="login">
        <Form
          name="basic"
          style={{
            width: 500,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          size="large"
          className="mx-3"
        >
          <h3 className="welcome">Welcome</h3>
          <p className="welcome">
            365toJapan Blogs administrator-only access point.
          </p>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your WPI email!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              span: 18,
            }}
          >
            <Button type="primary" htmlType="submit" className="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
export default Login;
