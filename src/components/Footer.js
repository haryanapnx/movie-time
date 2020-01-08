import React from "react";
import { Row, Col, Nav, Container } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGooglePlay,
  FaAppStore
} from "react-icons/fa";

const Footers = () => (
  <footer>
    <Container>
      <Row>
        <Col md="3">
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link href="/">
              <b>Category</b>
            </Nav.Link>
            <Nav.Link href="/">Horror</Nav.Link>
            <Nav.Link eventKey="link-1">Drama</Nav.Link>
            <Nav.Link eventKey="link-2">Action</Nav.Link>
          </Nav>
        </Col>
        <Col md="3">
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link href="/">
              <b>About Us</b>
            </Nav.Link>
            <Nav.Link href="/">About Us</Nav.Link>
            <Nav.Link eventKey="link-1">FAQ</Nav.Link>
            <Nav.Link eventKey="link-2">T & C</Nav.Link>
            <Nav.Link eventKey="link-2">Our Partners</Nav.Link>
          </Nav>
        </Col>
        <Col md="3">
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link href="/">
              <b>Follow Us</b>
            </Nav.Link>
            <Nav.Link href="/">
              <FaFacebook /> Movie.Time
            </Nav.Link>
            <Nav.Link href="/">
              <FaInstagram /> Movie.Time
            </Nav.Link>
            <Nav.Link href="/">
              <FaTwitter /> Movie.Time
            </Nav.Link>
          </Nav>
        </Col>
        <Col md="3">
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link href="/">
              <b>Get Our Apps</b>
            </Nav.Link>
            <Nav.Link href="/">
              <FaGooglePlay /> Google Play
            </Nav.Link>
            <Nav.Link href="/">
              <FaAppStore /> AppStore
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  </footer>
);
export default Footers;
