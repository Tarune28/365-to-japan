// Imports
import { useState } from "react";
import { Button } from "react-bootstrap";
import Header from "../../header/Header";
import PageBanner from "../../pagebanner/PageBanner";
import RequestUtils from "../../../utils/RequestUtils";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

// Images
import pageImage from "../../../img/contact/contactUs.jpg";

// Stylesheets
import "./ContactPage.css";

function ContactPage() {
  let [currentName, setCurrentName] = useState("");

  let [currentSubject, setCurrentSubject] = useState("");

  let [currentEmail, setCurrentEmail] = useState("");

  let [currentMessage, setCurrentMessage] = useState("");

  function formReset() {
    setCurrentMessage("");
    setCurrentSubject("");
    setCurrentEmail("");
    setCurrentName("");
  }

  function newMessage(e: { preventDefault: () => void; } | null) {
    if (e != null) {
      e.preventDefault();
    }
    let reqObj = {
      name: currentName,
      email: currentEmail,
      subject: currentSubject,
      message: currentMessage,
    };

    RequestUtils.post("/contact", reqObj)
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          alert("Email could not be sent! Try again Later!");
          return;
        }
        if (data.ok) {
          formReset();
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <>
      <Header />
      <PageBanner
        image={pageImage}
        title="Contact."
        subtitle="Reach out to 365toJapan staff."
      />
      <section className="margin-top-5 margin-bottom-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title" style={{ color: "#00b192" }}>
                Contact Form
              </h2>
            </div>
            <div className="col-10">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Col sm="12">
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    value={currentSubject}
                    onChange={(e) => {
                      setCurrentSubject(e.target.value);
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="Email">
                <Col sm="6">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={currentName}
                    onChange={(e) => {
                      setCurrentName(e.target.value);
                    }}
                  />
                </Col>
                <Col sm="6">
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    value={currentEmail}
                    onChange={(e) => {
                      setCurrentEmail(e.target.value);
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="Message">
                <Col sm="12">
                  <Form.Control
                    type="text"
                    placeholder="Message"
                    as="textarea"
                    rows={5}
                    value={currentMessage}
                    onChange={(e) => {
                      setCurrentMessage(e.target.value);
                    }}
                  />
                </Col>
              </Form.Group>
              <Button
                type="submit"
                className="btn-primary-soft px-5 mb-3"
                variant="outline-dark"
                size="sm"
                onClick={newMessage}
              >
                Send Message
              </Button>
            </div>
            <div className="col-12">
              <br />
              <h2 className="contact-title" style={{ color: "#00b192" }}>
                Other Contact Methods
              </h2>
              <p>Email: info@365tojapan.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
