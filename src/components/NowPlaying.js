import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardDeck } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

export default class NowPlaying extends Component {
  handleStar = number => {
    let stars = [];
    for (let i = 0; i < number; i++) {
      stars.push(i);
    }
    return stars.map(i => <FaStar key={i} color="yellow" />);
  };
  render() {
    return (
      <div className="m-5" align="center">
        <h1>Now Playing</h1>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="m-2"
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 2000,
                min: 1024
              },
              items: 3,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {this.props.movies_list.length > 0 &&
            this.props.movies_list.map(item => (
              <div key={item}>
                <CardDeck>
                  <Card className="text-white ">
                    <Card.Img
                      src={`http://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt="Card image"
                    />
                    <Card.ImgOverlay>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        {this.handleStar(item.vote_average)}
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </CardDeck>
              </div>
            ))}
        </Carousel>
      </div>
    );
  }
}
