import React from "react";
import { RiArrowDownCircleFill } from "react-icons/ri";
import {
  Container,
  Row,
  Col,
  Carousel
} from "react-bootstrap";

const date = [
  {
    id: 1,
    milestone: "MINT SALE",
    title: "COMMUNNITY FUND",
    content: "Community fund of $20,000 unlocked to support our ever growing community.",
  },
  {
    id: 2,
    milestone: "PRE SALE",
    title: "MERCH",
    content: "Special merch dropped to random CBD All Star holders as a thank you for holding strong.",
  },
  {
    id: 3,
    milestone: "MAIN SALE",
    title: "CHARITY",
    content: "$50,000 donated to a charity chosen by the community.",
  },
  {
    id: 4,
    milestone: "Q2 2022",
    title: "SANDBOX",
    content: "Purchase 3 x 3 plot of land in The Sandbox Metaverse.",
  },
  {
    id: 5,
    milestone: "Q3 2022",
    title: "FILM",
    content: "CBD All-Stars Film production will be mapping out for a feature length film starring real life CBD All-Stars characters",
  },
  {
    id: 6,
    milestone: "Q4 2022",
    title: "ROYALTIES",
    content: "CBD All-Stars Film distribution with 50% Royalties returned to NFT Holders",
  },
  {
    id: 7,
    milestone: "Q12023",
    title: "Future",
    content: "Play to earn games where you can grow, and harvest your CBD crop and turn it into oils where they can be sold, or used within the coolest place to hang out on The Sandbox. CBDA token released to be used to purchase oils in the real world or in the Metaverse. CBD All-Stars Online shop will be financed. We will produce our own CBD oil on the plot of land that we are purchasing. CBD All-Star NFT holders can either receive their share in the profits of the shop in CBDA or products. Launch of the 3D All-Star characters to use in our Hangout",
  },
];

function Roadmap() {
  return (
    <div id="road" className="bg-black text-white">
      <Container className="px-5 pt-5">
        <h1 className="text-center">ROADMAP</h1>
        {date.map(({ id, title, milestone, content }) => (
          <Row key={`${id}_${title}`} className="mb-5 mt-5">
            <Col lg={2} md={3} sm={4} xs={4} className="text-center">
              <h5 className="milestone-box text-center">{milestone}</h5>
            </Col>
            <Col className="justify-context">
              <h5 className="font-weight-bold mb-4 mt-1">{title}</h5>
              <p>{content}</p>
            </Col>
          </Row>
        ))}
        <p>SALE</p><br></br>
        <p>
          Mon 31st Jan Discord Giveaways<br></br>
          Mon 7th Feb Get in the WIP (This is the only way you’re guaranteed a CBD All-Star NFT) 1 week only chance<br></br>
          Mon 21th Feb WIP closed and WL Raffle open, 1 week only chance<br></br>
          Sun 20th Feb WIP MINT (750)<br></br>
          Sun 27th Feb WL Raffle MINT (1250)<br></br>
          Sun 6th Mar Public MINT (3000)<br></br>
          Sun 20th Mar Close MINT & BURN any unsold<br></br>
        </p>
        <h1 className="text-center">WIP</h1>
        <p className="text-center">
          Get in the WIP, this will be your *ONLY* chance to guarantee
          you can purchase a CBD All-Stars NFT!!<br></br><br></br>
        </p>
        <p className="text-center">
          WIP (You’re in) 750<br></br>
          WL Raffle (Pre Sale) 1250<br></br>
          Public Sale 3000<br></br>
        </p>
        <Row className="mt-5">
          <Col md={6} sm={12}>
            <Carousel fade className="my-auto">
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100 max-300 mx-auto"
                  src="./images/caro-1.webp"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100 max-300 mx-auto"
                  src="./images/caro-2.webp"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100 max-300 mx-auto"
                  src="./images/caro-3.webp"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100 max-300 mx-auto"
                  src="./images/caro-4.webp"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100 max-300 mx-auto"
                  src="./images/caro-5.webp"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100 max-300 mx-auto"
                  src="./images/caro-6.webp"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={6} sm={12} className="text-center">
            <p className="mt-4">WIP NOW LIVE!!</p>
            <a className="wip-icon" href="https://mint.cbdallstars.io/" target="blank"><RiArrowDownCircleFill/></a>
            <p className="mt-4">(Whitelist Immediate Purchase)</p>
            <p>WIP NOW LIVE!!</p>
            <a className="wip-icon" href="https://mint.cbdallstars.io/" target="blank"><RiArrowDownCircleFill/></a>
            <p className="mt-4">(Whitelist Immediate Purchase)</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Roadmap;