
import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../365.png";
import logo from "../../365.png"
import { Outlet, Link } from "react-router-dom";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css"
import Modal from 'react-bootstrap/Modal'

function Header() {

  let [showModal, setShowModal] = useState(false);

  let [scroll, setScroll] = useState(false);

  function showEventModal() {
    setShowModal(true);
}

function hideEventModal() {
  setShowModal(false);
}


  useEffect(() => {
  
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  
  return (
    // Navbar (sit on top)
    <>
     <Navbar className={scroll ? "card white site-navbar-sticky site-navbar site-navbar-target" : "mobileWhite site-navbar-sticky site-navbar site-navbar-target"} variant="light" expand="lg">
        <Container className="maxwidth-none">
            <Navbar.Brand href="/">
            <img
              src={logo}
     
              height="70"
              className="img my-1"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="">
            <Nav.Link className={window.location.pathname == "/" ? "active nav-link mx-4" : "nav-link mx-4"} href="/">Home</Nav.Link>
            <Nav.Link className={window.location.pathname == "/blogs" ? "active nav-link mx-4" : "nav-link mx-4"} href="/blogs">Blogs</Nav.Link>
            <Nav.Link className={window.location.pathname == "/about" ? "active nav-link mx-4" : "nav-link mx-4"} href="/about">About</Nav.Link>
            <Nav.Link className={window.location.pathname == "/contact" ? "active nav-link mx-4" : "nav-link mx-4"} href="/contact">Contact</Nav.Link>
            <Nav.Link className={window.location.pathname == "/login" ? "active nav-link mx-4" : "nav-link mx-4"} href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
  
          
 
    
        </Container >
       
      </Navbar>
      <Navbar className={(!scroll && window.location.pathname == "/") ? "card1 site-navbar-sticky1 site-navbar1 site-navbar site-navbar-target justify-content-center" : "card1 site-navbar-sticky1 site-navbar1 site-navbar site-navbar-target justify-content-center hide" } variant="light" expand="lg">
          <h6>365toJapan 1.0.2 updates have been released! Learn more <button onClick={showEventModal}>here.</button></h6>
    </Navbar>

    <Modal show={showModal} onHide={hideEventModal} centered style={{
      marginTop: '150px',
      maxHeight: 'calc(100vh - 210px)',
      overflowY: 'auto',
      marginRight: '0px'
     }} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>365toJapan 1.0.2</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="bullet">
                        <li>Conversion of website into web-app form with a combination of react.js/node.js/mongoDB</li>
                        <li>Refreshed all UI for all pages from minor font edits to entire re-structuring of layout</li>
                        <li>Redesigning blog post format</li>
                        <li>Redesigned banners (I.e. 365 cover animation)</li>
                        <li>Login dashboard for editing and posting</li>
                        <li>Bug fixes from previous website</li>
                        <li>All contact forms fixed</li>
                        <li>Creation of 365toJapan API</li>
                        <li>Other minor fixes (i.e. mobile compatibility)</li>
                    </ul>
                    <p>
                      Reach out to me at <a href="mailto:teswar@wpi.edu" className="email">teswar@wpi.edu</a> if you have any questions or suggestions for future updates. API access can be requested via email.
                    </p>
                    
                </Modal.Body>
            </Modal>
     
{/*     
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    </>
  
  );
}

export default Header;