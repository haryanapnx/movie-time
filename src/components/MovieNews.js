import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardDeck, Row, Col, Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

export default class MovieNews extends Component {
  handleStar = number => {
    let stars = [];
    for (let i = 0; i < number; i++) {
      stars.push(i);
    }
    return stars.map(i => <FaStar key={i} color="yellow" />);
  };
  render() {
    return (
      <Container fluid className="p-3">
        <h1 align="center" className="mb-2  ">
          Movie News
        </h1>
        <Row>
          {data.map((item, i) => (
            <Col className="mb-3" key={i} md="6">
              <Card className="shadow">
                <Row>
                  <Col>
                    <Card.Img
                      className="m-3"
                      style={{ maxWidth: 200 }}
                      src={item.url}
                    />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.desc}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
                <div align="right" className="m-3">
                  <a href="#">
                    <h6>Read More</h6>
                  </a>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <div align="right" className="m-3">
          <a style={{color:'grey'}} href="#">
            <h5>See All</h5>
          </a>
        </div>
      </Container>
    );
  }
}
const data = [
  {
    title: "Lorem Ipsum",
    url: "http://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
    desc:
      "dolor tortor, at pulvinar lectus porttitor id. Pellentesque eu magna vel enim fermentum accumsan at non diam. Maecenas eu commodo quam, non aliquet libero. Ut tempus nisl finibus velit pretium, id tempus odio faucibus. Suspendisse arcu augue, consectetu"
  },
  {
    title: "Lorem Ipsum",
    url: "http://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
    desc:
      "dolor tortor, at pulvinar lectus porttitor id. Pellentesque eu magna vel enim fermentum accumsan at non diam. Maecenas eu commodo quam, non aliquet libero. Ut tempus nisl finibus velit pretium, id tempus odio faucibus. Suspendisse arcu augue, consectetu"
  },
  {
    title: "Lorem Ipsum",
    url: "http://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
    desc:
      "dolor tortor, at pulvinar lectus porttitor id. Pellentesque eu magna vel enim fermentum accumsan at non diam. Maecenas eu commodo quam, non aliquet libero. Ut tempus nisl finibus velit pretium, id tempus odio faucibus. Suspendisse arcu augue, consectetu"
  },
  {
    title: "Lorem Ipsum",
    url: "http://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
    desc:
      "dolor tortor, at pulvinar lectus porttitor id. Pellentesque eu magna vel enim fermentum accumsan at non diam. Maecenas eu commodo quam, non aliquet libero. Ut tempus nisl finibus velit pretium, id tempus odio faucibus. Suspendisse arcu augue, consectetu"
  }
];
