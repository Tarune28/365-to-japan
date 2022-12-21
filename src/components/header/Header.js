
import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../365.png";
import logo from "../../365.png"
import { Outlet, Link } from "react-router-dom";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css"

function Header() {
  let [scroll, setScroll] = useState(false);
  useEffect(() => {
  
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  
  return (
    // Navbar (sit on top)
    <>
     <Navbar className={scroll ? "card white site-navbar-sticky site-navbar site-navbar-target" : "site-navbar-sticky site-navbar site-navbar-target"} variant="light" expand="lg">
        <Container className="maxwidth-none">
            <Navbar.Brand href="#home">
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
        
  
          
 
    
        </Container>
      </Navbar>
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