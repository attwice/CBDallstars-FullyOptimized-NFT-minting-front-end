import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1600 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 1600, min: 1300 },
    items: 5
  },
  pc: {
    breakpoint: { max: 1300, min: 1000 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1000, min: 668 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 668, min: 360 },
    items: 2
  }
};

function Join() {
  return (
    <div className="bg-dark pt-2 text-white">
      <Container>
        <h1 className="text-center my-5">Join CBD ALL STARS Today!</h1>
        <Row className="gx-0 pb-5">
          <Col md={6}>
            <h2 className="text-center">CBD ALL-STARS NFT’s</h2>
          </Col>
          <Col md={6}>
            <h5 className="mb-4 justify-context">
              CBD All-Stars are the very first NFT collection to hit the Ethereum
              Block Chain. It is a powerful message to represent and promote the
              benefits of CBD oils and CBD products.
            </h5>
            <h4 className="mb-4">
              CBD All-Stars<br></br>
              EMPOWERING THE COMMUNITY
            </h4>
            <a href="https://discord.gg/cbdallstars" target="blank" role="button" className="joinus-btn text-center">JOIN US</a>
          </Col>
        </Row>
      </Container>
      <div className="IndicatorCarousel text-center pb-5">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="IndicatorCarouselCard">
            <img className="caroimg w-100 p-2" src="../images/caro-1.webp" alt="carousolimg" />
          </div>
          <div className="IndicatorCarouselCard">
            <img className="caroimg w-100 p-2" src="../images/caro-2.webp" alt="carousolimg" />
          </div>
          <div className="IndicatorCarouselCard">
            <img className="caroimg w-100 p-2" src="../images/caro-3.webp" alt="carousolimg" />
          </div>
          <div className="IndicatorCarouselCard">
            <img className="caroimg w-100 p-2" src="../images/caro-4.webp" alt="carousolimg" />
          </div>
          <div className="IndicatorCarouselCard">
            <img className="caroimg w-100 p-2" src="../images/caro-5.webp" alt="carousolimg" />
          </div>
          <div className="IndicatorCarouselCard">
            <img className="caroimg w-100 p-2" src="../images/caro-6.webp" alt="carousolimg" />
          </div>
          <div className="IndicatorCarouselCard">
            <img className="caroimg w-100 p-2" src="../images/caro-7.webp" alt="carousolimg" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Join;