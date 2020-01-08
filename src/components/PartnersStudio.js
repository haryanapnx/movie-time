import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardDeck, Row, Col, Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

export default class PartnersStudio extends Component {
  render() {
    const img =[
      {url:'https://upload.wikimedia.org/wikipedia/id/8/87/XXI.png'},
      {url:'https://upload.wikimedia.org/wikipedia/id/4/43/CGV_Logo_Global_BI_V9-02.png'},
      {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYnLM9ONw-dBJhhuGfn6YFB96i_5MvAynbsE2O0pbRLdqNVqBJ'},
      {url:'https://i2.wp.com/www.zoombali.com/wp-content/uploads/2018/05/Cinemaxx-Bali1.png?fit=623%2C357&ssl=1'},
    ]
    return (
      <Container fluid className="p-3">
        <h1 align="center" className="mb-2  ">
          Partner Studio
        </h1>
        <Row>
          {img.map((item, i) => (
            <Col className="mb-3" key={i} md="3">
              <img style={{maxWidth:300}} src={item.url} alt={img.url} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
const data = [1, 2, 3];
