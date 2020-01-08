import React, { Component } from "react";
import { Nav, Button, Row, Col, NavDropdown } from "react-bootstrap";
import AutoComplete from "./AutoComplete";

export default class Header extends Component {
  render() {
    return (
      <div className="bg-nav p-3 shadow">
        <Row>
          <Col md="2">
            <h2 style={{ color: "white" }}>
              Movie <span style={{ color: "yellow" }}>Time</span>
            </h2>
          </Col>
          <Col md="6">
            <AutoComplete
              searchMovies={this.props.searchMovies}
              suggestions={this.props.movies_list_search}
            />
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
              <Nav.Link style={{ color: "#fff" }} href="#home">
                Login
              </Nav.Link>
              <Button variant="outline-light">Get Started</Button>
            </Nav>
          </Col>
        </Row>
        {/* </Navbar> */}
      </div>
    );
  }
}
