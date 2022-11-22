import { Button } from "react-bootstrap";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import PageBanner from "../../../components/pagebanner/PageBanner";
import pageImage from "../../../img/contact/contactUs.jpg"
import RequestUtils from "../../../utils/RequestUtils";
import { useState } from "react";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function ContactPage(){

    let [showModal, setShowModal] = useState(false);

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

    function newMessage(e) {
        if (e != null){
          e.preventDefault();
      }
      let reqObj = {
        name: currentName,
        email: currentEmail,
        subject: currentSubject,
        message: currentMessage
      }
  
      console.log("here")
      RequestUtils.post("/contact", reqObj) // send out post req and get the response from server
          .then(response => response.json()) 
          .then(data => { // data = JSON object created ^^
              if (!data.ok) {
                  alert("Email could not be sent! Try again Later!");
                  return;
              }
              if (data.ok){
                formReset();
                
              }
              
  
      
          })
          .catch(error => {
              alert(error);
          });
        //  showEventModal();
      }
    return (
        <>
        <Header/>
        <PageBanner image={pageImage} title="Contact"/>
        <section class="area-padding">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="contact-title" style={{color: "#00b192"}}>Contact Form</h2>
                </div>
                <div class="col-12">
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              
                


        <Col sm="12">
          <Form.Control type="text"
              placeholder="Subject"
              value={currentSubject}
              onChange={(e) => {
               setCurrentSubject(e.target.value);
              }}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="Email">
 
        <Col sm="6">
        <Form.Control type="text"
              placeholder="Name"
              value={currentName}
              onChange={(e) => {
               setCurrentName(e.target.value);
              }}/>
        </Col>

        <Col sm="6">
        <Form.Control type="text"
              placeholder="Email"
              value={currentEmail}
              onChange={(e) => {
               setCurrentEmail(e.target.value);
              }}/>
        </Col>
      </Form.Group>
 
      <Form.Group as={Row} className="mb-3" controlId="Message">
 
        <Col sm="12">
        <Form.Control type="text"
              placeholder="Message"
              as="textarea"
              rows={5}
              value={currentMessage}
              onChange={(e) => {
               setCurrentMessage(e.target.value);
              }}/>
        </Col>
      </Form.Group>
      <Button type="submit" class="w3-button w3-hoverColor1" variant="outline-dark" onClick={newMessage}>Send Message</Button>
      </div>
                
                
                <div class="col-12">
                  <br/>
                    <h2 class="contact-title" style={{color: "#00b192"}}>Other Contact Methods</h2>
                    <p>Email: info@365tojapan.com</p>
                </div>
            </div>
        </div>
        
    </section>
        </>
    );
}

export default ContactPage;