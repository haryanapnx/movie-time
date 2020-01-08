import React, { Component } from "react";
import {
  Nav,
  InputGroup,
  Button,
  FormControl,
  Row,
  Col,
  Form,
  NavDropdown
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default class Header extends Component {
  render() {
    return (
      <div className="bg-nav p-3 shadow">
        <Row>
          <Col md="2">
            <h2 style={{color:'white'}}>
              Movie <span style={{ color: "yellow" }}>Time</span>
            </h2>
          </Col>
          <Col md="6">
            <InputGroup className="ml-2">
            <FormControl aria-describedby="basic-addon2" />
            <InputGroup.Append>
              <Button style={color} variant="light">
                <FaSearch color="grey" />
              </Button>
            </InputGroup.Append>
          </InputGroup>
          </Col>
          <Col md="4">
            <Nav className="ml-auto">
              <NavDropdown title="Category" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                  Something else here
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link style={{color:'#fff'}} href="#home">Login</Nav.Link>
              <Button variant="outline-light">Get Started</Button>
            </Nav>
          </Col>
        </Row>
        {/* </Navbar> */}
      </div>
    );
  }
}

const color ={backgroundColor:'#fff'}