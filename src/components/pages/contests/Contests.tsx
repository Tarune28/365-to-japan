// Imports
import Header from "../../header/Header";
import PageBanner from "../../pagebanner/PageBanner";
import { Result } from "antd";
import { useState } from "react";
import RequestUtils from "../../../utils/RequestUtils";
import { Button } from "react-bootstrap";
import { ConfigProvider, Row, Col, Steps } from "antd";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

// Images
import pageImage from "../../../img/contests/background.jpeg";

// Stylesheets
import "./Contests.css";

function Contests() {

  let [currentName, setCurrentName] = useState("");

  let [currentAuthorsNote, setAuthorsNote] = useState("");

  let [currentEmail, setCurrentEmail] = useState("");

  let [currentHaiku, setHaiku] = useState("");

  let [successModal, setSuccessModal] = useState(false);

  let [agree, setAgree] = useState(false);

  function hideSuccessModal() {
    setSuccessModal(false);
    window.location.reload();
  }

  function formReset() {
    setHaiku("");
    setAuthorsNote("");
    setCurrentEmail("");
    setCurrentName("");
    setAgree(false);
  }

  function newMessage(e: { preventDefault: () => void; } | null) {
    if (e != null) {
      e.preventDefault();
    }

    let reqObj = {
      name: currentName,
      email: currentEmail,
      authorsNote: currentAuthorsNote,
      haiku: currentHaiku,
      agree: agree,
    };

    RequestUtils.post("/contestContact", reqObj)
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          alert("Email could not be sent! Try again Later!");
          return;
        }
        if (data.ok) {
          formReset();
          setSuccessModal(true);
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
        title="365toJapan Haiku Contest"
        subtitle="2023 summer edition."
      />
      <Container>
        <Row style={{ marginTop: "80px" }}>
          <Col md={7} className="mx-5 mt-5">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#36B192",
                },
              }}
            >
              <Steps
                direction="vertical"
                current={1}
                items={[
                  {
                    title: "Contest Start",
                    description: "May 30th",
                  },
                  {
                    title: "Contest In Progress",
                    description: "Ongoing",
                  },
                  {
                    title: "Contest Conclusion",
                    description: "August 30th",
                  },
                  {
                    title: "Release of Results",
                    description: "September 10th - September 30th",
                  },
                ]}
              />
            </ConfigProvider>
          </Col>
          <Col lg={12} className="mx-5 mt-4">
            Over the upcoming weeks, 365toJapan will host its first semi-annual
            summer/spring haiku contest. To start off the contest, we wanted to
            provide some important notes. (a) The contest will only accept haiku
            and unfortunately not be able to consider other types of
            poetry/prose (b) The range of topics within haiku submissions is not
            restricted, but focusing on Japanese culture is encouraged (c) The
            results of the contest will be released in the fall/winter issue of
            365toJapan. To be clear, at this point, publication will be online
            only—no print version is planned at this time.
          
            <br></br>
            <br></br>
            The contest will be hosted through 365toJapans itself. Each entry will
            be required to pay a fee of 3 dollars to enter the contest. The fee
            will be used to cover the cost of the prizes and the cost of the
            publication of the winning entries. The fee will be non-refundable.
            If the fee poses a significant financial hardship, please contact us
            at info@365tojapan.com in order to receive assistance.
          </Col>
        </Row>
        <Row className="pt-5 mx-5">
          <h3 className="contestHeader">
            Guidelines (preliminary and subject to change)
          </h3>
          <ol>
            <li>
              Up to 4 haiku per person per entry, with one submission allowed
              per person per submission period
            </li>
            <li>
              Anticipated 2 issues per year, with one spring/summer release and
              one fall/winter release
            </li>
            <li>
              All ages 13 and up will be allowed to submit, with parent/guardian
              permission required for authors under 18
            </li>
            <li>All submitted work must be previously unpublished</li>
            <li>
              All pieces can be simultaneous submissions, provided the author
              immediately alerts 365toJapan if there are any haiku accepted
              elsewhere
            </li>
            <li>
              Moderate adult language is allowed if it serves the greater
              purpose of the piece; gratuitous violence and profanity will
              automatically disqualify a piece from publication consideration
            </li>
          </ol>
        </Row>
        <Row className="pt-3 mx-5">
          <h3 className="contestHeader">Rankings</h3>
          <br></br>
          <br></br>
          <p>
            After concluding the contest, we plan to provide the first place
            winner with 50 dollars, the second place winner with 35 dollars, and
            the third place winner will receive 15 dollars (in Amazon gift
            cards). Furthermore, the top submissions will be spotlighted on this
            page of 365toJapan (and will not be removed).
          </p>
        </Row>
        <Row className="pt-3 mx-5">
          <h3 className="contestHeader">Judges</h3>
          <br></br>
          <br></br>
          <p>
            Our judges will be a rotating panel of 3-5 individuals, with each
            judge being both native English/Japanese speaker. The judges will be
            selected based on their experience with haiku, their ability to
            judge haiku, and their ability to provide constructive criticism.
            The judges will be announced at the start of each contest. Each
            contestant will receive feedback on their work from judges.
          </p>
        </Row>
        <Row className="pt-3 mx-5">
          <h3 className="contestHeader">Submissions</h3>
          <br></br>
          <br></br>
          <p>
            Below, the submission spot for this contest can be found. Please
            follow all guidlines and note that you have read and met them with
            the checkbox at the end.
          </p>
          <div className="container">
            <div className="row">
              <div className="col-10">
                <Form.Group className="mb-3" controlId="Email">
                  <Col sm="12">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      value={currentName}
                      onChange={(e) => {
                        setCurrentName(e.target.value);
                      }}
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                  <Col sm="12">
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
                <Form.Group className="mb-3" controlId="Message">
                  <Col sm="12">
                    <Form.Control
                      type="text"
                      placeholder="Author's Note"
                      as="textarea"
                      rows={3}
                      value={currentAuthorsNote}
                      onChange={(e) => {
                        setAuthorsNote(e.target.value);
                      }}
                    />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Message">
                  <Col sm="12">
                    <Form.Control
                      type="text"
                      placeholder="Haiku Submission"
                      as="textarea"
                      rows={5}
                      value={currentHaiku}
                      onChange={(e) => {
                        setHaiku(e.target.value);
                      }}
                    />
                  </Col>
                </Form.Group>
                <Form.Group>
                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="I agree to the guildlines of the contest, including parental consent if needed."
                        name="group1"
                        type={"radio"}
                        onChange={(e) => {
                          setAgree(true);
                        }}
                        value={0}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="I do not agree to the guildlines of the contest."
                        name="group1"
                        type={"radio"}
                        onChange={(e) => {
                          setAgree(false);
                        }}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Button
                  type="submit"
                  className="btn-primary-soft px-5 mb-5"
                  variant="outline-dark"
                  size="sm"
                  onClick={newMessage}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </Row>
        <br></br>
      </Container>
      <Modal show={successModal} onHide={hideSuccessModal} centered>
        <Result
          status="success"
          title="Haiku Successfully Submitted to Contest"
          subTitle="Remember that only 1 submission is allowed per person per submission period. Additional submissions will not be considered. If there was a mistake in your submission and you wish to resubmit, please contact us at."
          extra={[
            <Button onClick={() => window.location.reload()}>
              Close
            </Button>,
          ]}
        />
      </Modal>
    </>
  );
}

export default Contests;
