// Imports
import { useState } from "react";
import RequestUtils from "../../utils/RequestUtils";
import { Modal } from "antd";
import { Button, Form, Input, Result } from "antd";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";

// Stylesheets
import "./Footer.css";

function Footer() {

  let [showModal, setShowModal] = useState(false);

  let [currentName, setCurrentName] = useState("");

  let [currentEmail, setCurrentEmail] = useState("");

  function showEventModal() {
    setShowModal(true);
  }

  function hideEventModal() {
    setShowModal(false);
  }

  function formReset() {
    setCurrentEmail("");
    setCurrentName("");
  }

  function newSubscriber(e?: { preventDefault: () => void; } | null | undefined) {
    if (e != null) {
      e.preventDefault();
    }
    let reqObj = {
      name: currentName,
      email: currentEmail,
    };

    RequestUtils.post("/subscriber/email", reqObj)
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          alert("Form could not be sent! Try again later!");
          return;
        }
        if (data.ok) {
          formReset();
        }
      })
      .catch((error) => {
        alert("Email could not be sent! Try again later!");
      });
    showEventModal();
  }

  return (
    <>
      <Modal open={showModal} onCancel={hideEventModal} footer={null} centered>
        <Result status="success" title="Mailing list has been joined" />
      </Modal>
      <MDBFooter
        style={{ backgroundColor: "#808080" }}
        className="text-center text-white text-lg-left"
      >
        <MDBContainer
          className="p-4 pb-0 mx-auto text-center max-width-0"
          style={{ display: "flex" }}
        >
          <Form
            layout="inline"
            className="mx-auto text-center div mx-reset-1"
            style={{
              width: 550,
            }}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
              className="mb-2 input-control mr-0 mx-reset-1"
            >
              <Input
                placeholder="name"
                size="small"
                onChange={(e) => setCurrentName(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
              className="mb-2 input-control mx-auto mx-reset-1"
            >
              <Input
                placeholder="email"
                style={{ color: "white" }}
                size="small"
                onChange={(e) => setCurrentEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item className="ml-0 flex-0">
              <Button
                className="btn-primary-soft-inverse mx-reset-1"
                shape="round"
                size="small"
                onClick={() => newSubscriber()}
              >
                Join Mailing List
              </Button>
            </Form.Item>
          </Form>
        </MDBContainer>
        <div className="text-center center-0 p-3" style={{ backgroundColor: "#808080" }}>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-white" href="https://365toJapan.com/">
            365toJapan.com
          </a> | {" "}
          <a className="text-white" target="0" href="https://github.com/Tarune28/365-to-japan/blob/master/Terms-Conditions.md">
             Terms & Conditions
          </a>
        </div>
      </MDBFooter>
    </>
  );
}

export default Footer;
