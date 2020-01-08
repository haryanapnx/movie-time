import React, { Component } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

export default class UserReviews extends Component {
  handleStar = number => {
    let stars = [];
    for (let i = 0; i < number; i++) {
      stars.push(i);
    }
    return stars.map(i => <FaStar key={i} color="orange" />);
  };
  render() {
    return (
      <Container fluid className="p-3">
        <h1 align="center" className="mb-2  ">
          Movie News
        </h1>
        <Row>
          {data.map((item, i) => (
            <Col className="mb-3" key={i} md="4">
              <Card bg="light">
                <Card.Body>
                  <Card.Title>Guardians of the Galaxy</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Travis Bell
                  </Card.Subtitle>
                  {this.handleStar(4)}
                  <Card.Text>
                    "Like most of the reviews here, I agree that Guardians of
                    the Galaxy was an absolute hoot. Guardians never takes
                    itself too seriously which makes this movie a whole lot of
                    characters.\r\n\r\nGuardians of the Galaxy is one of those
                    rare complete audience pleasers. Good fun for everyone!"
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div align="right" className="m-3">
          <a style={{ color: "grey" }} href="!#">
            <h5>See All</h5>
          </a>
        </div>
      </Container>
    );
  }
}
const data = [1, 2, 3];
