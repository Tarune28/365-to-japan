import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./LoginPage.css";
import pageImage from "../../../img/loginDash/greyPAl.jpg";
// change image
import PageBanner from "../../pagebanner/PageBanner";
import Form from "react-bootstrap/Form";
import { Button, ButtonGroup } from "react-bootstrap";
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
  return (
    <>
    <PageBanner image={pageImage} title="Administrative Login."/>
    <div className="login">
      <div className="login__container">
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
     
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </Button>
      </div>
    </div>
    </>
  );
}
export default Login;