import "./Footer.css";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Footer() {

    return (
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
          <Form.Control type="text" placeholder="Name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
 
        <Col sm="10">
          <Form.Control type="text" placeholder="Email" />
        </Col>
      </Form.Group>
<Button variant="outline-dark">Join</Button>{' '}

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
      </footer>
    );
}

export default Footer;