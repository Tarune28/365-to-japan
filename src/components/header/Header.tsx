// Imports
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Modal, Button } from "antd";

// Logo Image
import logo from "../../365.png";

// Stylesheets
import "./Header.css";
import "../../App.css";

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
    <>
      <Navbar
        className={
          scroll
            ? "card white site-navbar-sticky site-navbar site-navbar-target" : "mobileWhite site-navbar-sticky site-navbar site-navbar-target"
        }
        variant="light"
        expand="lg"
      >
        <Container className="maxwidth-none">
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="100"
              className="img my-1"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="">
              <Nav.Link
                className={
                  window.location.pathname == "/"
                    ? "active nav-link mx-4"
                    : "nav-link mx-4"
                }
                href="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={
                  window.location.pathname == "/about"
                    ? "active nav-link mx-4"
                    : "nav-link mx-4"
                }
                href="/about"
              >
                About
              </Nav.Link>
              <Nav.Link
                className={
                  window.location.pathname == "/blogs"
                    ? "active nav-link mx-4"
                    : "nav-link mx-4"
                }
                href="/blogs"
              >
                Blogs
              </Nav.Link>
              <Nav.Link
                className={
                  window.location.pathname == "/contests"
                    ? "active nav-link mx-4"
                    : "nav-link mx-4"
                }
                href="/contests"
              >
                Contests
              </Nav.Link>
              <Nav.Link
                className={
                  window.location.pathname == "/contact"
                    ? "active nav-link mx-4"
                    : "nav-link mx-4"
                }
                href="/contact"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                className={
                  window.location.pathname == "/login"
                    ? "active nav-link mx-4"
                    : "nav-link mx-4"
                }
                href="/login"
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar
        className={
          !scroll && window.location.pathname == "/"
            ? "card1 site-navbar-sticky1 site-navbar1 site-navbar site-navbar-target justify-content-center"
            : "card1 site-navbar-sticky1 site-navbar1 site-navbar site-navbar-target justify-content-center hide"
        }
        variant="light"
        expand="lg"
      >
        <h6>
          365toJapan 1.0.2 updates have been released! Learn more{" "}
          <button
            onClick={showEventModal}
            style={{ textDecoration: "underline" }}
          >
            here
          </button>
          .
        </h6>
      </Navbar>

      <Modal
        open={showModal}
        onCancel={hideEventModal}
        centered
        style={{
          marginTop: "150px",
          maxHeight: "calc(100vh - 210px)",
          overflowY: "auto",
          marginRight: "0px",
        }}
        footer={[
          <Button
            key="1"
            className="btn-primary-soft"
            shape="round"
            href="mailto:teswar@wpi.edu"
          >
            Contact
          </Button>,
        ]}
        title="365toJapan 1.0.2"
      >
        <ul className="bullet">
          <li>
            Conversion of static to application-based platform with a MongoDB
            backing
          </li>
          <li>
            Refreshed all UI for all pages from minor font edits to entire
            re-structuring of layout
          </li>
          <li>Redesigning blog post format</li>
          <li>Redesigned banners (I.e. 365 cover animation)</li>
          <li>Login dashboard for editing and posting</li>
          <li>Bug fixes from previous website</li>
          <li>All contact forms fixed</li>
          <li>Creation of 365toJapan API</li>
          <li>Other minor fixes (i.e. mobile compatibility)</li>
        </ul>
        <p>
          Reach out to me at{" "}
          <a href="mailto:teswar@wpi.edu" className="email">
            teswar@wpi.edu
          </a>{" "}
          if you have any questions or suggestions for future updates. API
          access can be requested via email.
        </p>
      </Modal>
    </>
  );
}

export default Header;
