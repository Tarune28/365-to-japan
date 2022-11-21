import "./Footer.css";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import RequestUtils from "../../utils/RequestUtils";
import { Modal } from "react-bootstrap";

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

    function newSubscriber(e) {
      if (e != null){
        e.preventDefault();
    }
    let reqObj = {
      name: currentName,
      email: currentEmail
    }

    console.log("here")
    RequestUtils.post("/subscriber/email", reqObj) // send out post req and get the response from server
        .then(response => response.json()) 
        .then(data => { // data = JSON object created ^^
            if (!data.ok) {
                alert("email could not be sent!");
                return;
            }
            if (data.ok){
              formReset();
             
            }
            

    
        })
        .catch(error => {
            alert("Something went wrong!");
        });
        showEventModal();
    }
    
    return (
      <>
      <Modal show={showModal} onHide={hideEventModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Thank you for subscribing!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    We will email you when a new blog is out!
                </Modal.Body>
            </Modal>






        <footer className="footer-area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6 style={{color: "#f08812"}}>About Me</h6>
                <p style={{color: "white"}}>
                  I am a passionate Japanese language learner and culture appreciator. Next summer, I plan to visit Japan. Like many Japanese learners, I’m trying to further immerse myself in the language, and I figured the best way is to spend 2 months in Japan. However, I am not perfect.            </p>
                <div className=" w3-hide-small">
                  <a href="about.html" className="w3-bar-item w3-button w3-hoverColor2" style={{width: "100%", borderRadius: "25px"}}>Read More</a>
                </div>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5   col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6 style={{color: "#f08812"}}>Notifications</h6>
                <p style={{color: "white"}}>Enter your name and email to receive updates of upcoming blogs!</p>
               
               
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              
                


        <Col sm="10">
          <Form.Control type="text"
              placeholder="Name"
              value={currentName}
              onChange={(e) => {
               setCurrentName(e.target.value);
              }}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="Email">
 
        <Col sm="10">
        <Form.Control type="text"
              placeholder="Email"
              value={currentEmail}
              onChange={(e) => {
               setCurrentEmail(e.target.value);
              }}/>
        </Col>
      </Form.Group>
<Button variant="outline-dark" onClick={newSubscriber}>Join</Button>{' '}

              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6 style={{color: "#f08812"}}>Site Map</h6>
                <ul className="footer-div" style={{color: "white"}}>
                  <li><a href="/">Home</a></li>
                  <li><a href="/blogs">Blogs</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact" >Contact</a></li>
                  <li><a href="/login" >Dashboard Portal</a></li>
                  <li><a href="#top">Back To Top</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer></>
    );
}

export default Footer;