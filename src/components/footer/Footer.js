import "./Footer.css";
import Col from 'react-bootstrap/Col';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Result } from 'antd';
import {Row} from 'antd';
// import Button from 'react-bootstrap/Button';
import { useState } from "react";
import RequestUtils from "../../utils/RequestUtils";
import { Modal } from "antd";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';

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

    RequestUtils.post("/subscriber/email", reqObj) // send out post req and get the response from server
        .then(response => response.json()) 
        .then(data => { // data = JSON object created ^^
            if (!data.ok) {
                alert("Form could not be sent! Try again later!");
                return;
            }
            if (data.ok){
              formReset();
            }
        })
        .catch(error => {
            alert("Email could not be sent! Try again later!");
        });
        setShowModal(true);
    }

    const success = () => {
 
        Modal.success({
        content: 'some messages...some messages...',
      })

      
    };

    return (
      <>
      <Modal open={showModal} onCancel={hideEventModal} footer={null} centered>
      <Result
          status="success"
          title="Mailing list has been joined"
        />
      </Modal>

            <MDBFooter style={{backgroundColor: '#808080'}} className='text-center text-white text-lg-left'>
      <MDBContainer className='p-4 pb-0 mx-auto text-center' style={{display: "flex"}}>
      
      <Form layout="inline" className="mx-auto text-center" style={{
                width: 550,
              }}>
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please enter your name' }]}
        className="mb-2 input-control mr-0"
      >
        <Input placeholder="name" size="small" onChange={(e) => setCurrentName(e.target.value)}/>
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
        className="mb-2 input-control mx-auto"
      >
        <Input placeholder="email" style={{color: "white"}} size="small" onChange={(e) => setCurrentEmail(e.target.value)}/>
      </Form.Item>


      <Form.Item className="ml-0">
        <Button className="btn-primary-soft-inverse" shape="round" size="small" onClick={() => newSubscriber()}>
          Join Mailing List
        </Button>
      </Form.Item>
    </Form>

      
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: '#808080' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://365toJapan.com/'>
          365toJapan.com
        </a>
      </div>
    </MDBFooter>





        {/* <footer className="footer-area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6 style={{color: "white"}}>About Me</h6>
                <p style={{color: "white"}}>
                  I am a passionate Japanese language learner and culture appreciator. Next summer, I plan to visit Japan. Like many Japanese learners, I’m trying to further immerse myself in the language, and I figured the best way is to spend 2 months in Japan. However, I am not perfect.            </p>
                <div className=" w3-hide-small">
                <Button variant="outline-light" size="sm" href="/about">Read More</Button>{' '}
             
                </div>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5   col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6 style={{color: "white"}}>Notifications</h6>
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
        <Form.Control 
              
              type="text"
              placeholder="Email"
              value={currentEmail}
              onChange={(e) => {
               setCurrentEmail(e.target.value);
              }}/>
        </Col>
      </Form.Group>
<Button variant="outline-light" size="sm" onClick={newSubscriber}>Join</Button>{' '}

              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6 style={{color: "white"}}>Site Map</h6>
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
      </footer> */}</>
    );
}

export default Footer;