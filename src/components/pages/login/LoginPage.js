import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./LoginPage.css";
import pageImage from "../../../img/loginDash/greyPAl.jpg";
// change image
import PageBanner from "../../pagebanner/PageBanner";
import {Form} from "antd";
import { Input, Button } from "antd";
import { ButtonGroup } from "react-bootstrap";
import {Modal} from "antd";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  const onFinish = (values) => {
    logInWithEmailAndPassword(values["email"], values["password"]).then(
      (result) => {
        if(result == "Invalid password or email") {
          return (
            Modal.error({
              title: 'Login Failed',
              content: 'Either your email or passoword is incorrect. Please try again. If you have submitted more than 3 incorrect attempts please contact an administrator.',
            })
        );
        }
      }
    )
    
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
    <PageBanner image={pageImage} title="Staff Login Portal" subtitle="The place where blog making happens."/>
    <div className="login">
    
    <Form
              name="basic"
              className=""
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
            >
              
            <h3 className="welcome">Welcome</h3>
            <p className="welcome">365toJapan Blogs administrator-only access point.</p>
            
              <Form.Item

                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your WPI email!",
                  },
                ]}
              >
                <Input placeholder="Email"/>
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
                <Input.Password placeholder="Password"/>
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
      
      {/* <div className="login__container">
      <h6 style={{fontSize: "1.25rem"}}>365toJapan Staff Login.</h6><br></br>
        <Form.Control
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <Form.Control
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button
          className="login__button"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </Button>
      </div> */}
    </div>
    </>
  );
}
export default Login;