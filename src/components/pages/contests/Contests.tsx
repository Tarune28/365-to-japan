// Imports
import Header from "../../header/Header";
import PageBanner from "../../pagebanner/PageBanner";
import { Card, Result, TabsProps } from "antd";
import { useState } from "react";
import RequestUtils from "../../../utils/RequestUtils";
import { Button } from "react-bootstrap";
import { ConfigProvider, Row, Col, Steps } from "antd";
import { Container } from "react-bootstrap";
import {Modal} from "antd";
import Form from "react-bootstrap/Form";

// Images
import pageImage from "../../../img/contests/background.webp";

// Stylesheets
import "./Contests.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { InfoCircleOutlined } from "@ant-design/icons";

function Contests() {

  let [currentName, setCurrentName] = useState("");

  let [currentAuthorsNote, setAuthorsNote] = useState("");

  let [currentEmail, setCurrentEmail] = useState("");

  let [currentHaiku, setHaiku] = useState("");

  let [successModal, setSuccessModal] = useState(false);

  let [agree, setAgree] = useState(false);


  let [bio, setBio] = useState("");

  let [showModal, setShowModal] = useState(false);


  const authorBios: { [key: string]: string; } = {
    "adam": "Adam Haver’s writing has been featured in Popshot Quarterly, Poetry Scotland, Ballast, Braided Way, as well as other journals. He received the 2022 Willie Morris Award for Southern Poetry and previously served as Editor of the literary magazine, FOLIO. You can connect with him on Twitter: @ac_haver.",
    "nicole": "Nicole is a current 11th grader from Vancouver, Canada. She started learning Japanese a year ago in school, and is looking forward to progressing with her language skills. Next year, she intends to visit Japan in order to improve her speaking skills.",
    "frank": "Frank Amaya did not request an author's note.",
  }

  let showBio = (key: string) => {
    setBio(authorBios[key]);
    setShowModal(true);
  };
  
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
  ];

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
        subtitle="Currently: 2023 summer edition."
      />
      <Container>
      <Row className="pt-5 mt-5 mx-5">
         
         <h3 className="contestHeader results">
           Results from the 2021 Summer Haiku Contest
         </h3>
         
         
         <Container>
         <p className="description mb-5">[Released Nov. 2nd 22:42 EST]<br></br><br></br>We are happy to announce that we received many submissions from 365toJapan readers for our inaugural contest. After weeks of judging, we decided on the following three selections for their strong connections to Japanese culture and vivid descriptions. These pieces will hold their place on 365toJapan and represent the start of a haiku collection celebrated within our community. Thank you to everyone that participated, and be sure to watch out for our upcoming fall/winter contest!<br></br><br></br> —365toJapan</p>
          <Row>
            <Col span={7} className="mx-4">
              
            <Card title="Adam Haver" extra={<InfoCircleOutlined onClick={() => showBio("adam")}/>}>
            unblinking Sandra <br></br>
green eyes of envy<br></br>
weeding with shadow<br></br>

            </Card>
            </Col>
            <Col span={7} className="mx-2">
            <Card title={"Nicole Zhang"} extra={<InfoCircleOutlined onClick={() => showBio("nicole")}/>}>
            Pay respects and bow<br></br>
Black cloth whips about, calves tense<br></br>
気合, then attack.

            </Card>
            </Col>
            <Col span={7} className="mx-4">
            <Card title={"Frank Amaya"} extra={<InfoCircleOutlined onClick={() => showBio("frank")}/>}>
            Koi weave through moon's glow,<br></br>
Whispers ripple in stillness—<br></br>
Secrets of the depths.

            </Card>
            </Col>
            </Row>
         </Container>
       </Row>
       

       <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
       <h3 className="contestHeader mx-5 mt-5 pt-5">
           General Contest Information
         </h3>

      
        <Row style={{ marginTop: "0px" }} className="mx-5">
        
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
                current={3}
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
                    description: "October 20th",
                  },
                  {
                    title: "Release of Results",
                    description: "October 20th - November 30th",
                  },
                ]}
              />
            </ConfigProvider>
          </Col>
          <Col lg={12} className="mx-5 mt-4">
            365toJapan will hosts both a summer/spring and a fall/winter haiku
            contest. Each contest follows some key notes. (a) The contest will only accept haiku
            and unfortunately not be able to consider other types of
            poetry/prose (b) The range of topics within haiku submissions is not
            restricted, but focusing on Japanese culture is encouraged (c) The
            results of the contest will be released approximately 2 months after the contest start. To be clear, at this point, publication will be online
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
      </AnimationOnScroll>
        <div>
        <Row className="pt-5 mx-5">
         
          <h3 className="contestHeader">
            Guidelines (subject to change)
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
            (Currently closed) Below, the submission spot for this contest can be found. Please
            follow all guidlines and note that you have read and met them with
            the checkbox at the end.
          </p>
          {/* <div className="container">
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
                  disabled
                >
                  Send Submission
                </Button>
              </div>
            </div>
          </div> */}
        </Row>
        </div>
        <br></br>
      </Container>
      <Modal open={successModal} onCancel={hideSuccessModal} centered>
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
      <Modal 
        title="Author Bio" 
        open={showModal} 
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        <p>{bio}</p>
      </Modal>
    </>
  );
}

export default Contests;
