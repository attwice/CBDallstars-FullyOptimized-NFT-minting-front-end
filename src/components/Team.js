import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const date = [
  {
    id: 1,
    imgurl: "../images/link-1.webp",
    link: "https://www.linkedin.com/in/farunurisonmez",
    name: "FARU",
    role: "Developer/Coder and blockchain expert. The technical wizard.",
  },
  {
    id: 2,
    imgurl: "../images/link-2.webp",
    link: "https://www.linkedin.com/in/ben-quick-191b5712a",
    name: "Ben Quick",
    role: "Founder The NFT Marketplace Ltd and crazy about NFT’s.",
  },
  {
    id: 3,
    imgurl: "../images/link-3.webp",
    link: "https://www.linkedin.com/in/andrew-pritchard-msc-dippfs-football-club-owner-74539680",
    name: "Andy Pritchard MSc DipPFS",
    role: "Non exec to The NFT Marketplace Ltd and strategist.",
  },
  {
    id: 4,
    imgurl: "../images/link-4.webp",
    link: "https://www.linkedin.com/in/arash-fahmi-19a054151",
    name: "Arash",
    role: "Discord expert who keeps our community engaged",
  },
  {
    id: 5,
    imgurl: "../images/link-5.webp",
    link: "",
    name: "Durgesh",
    role: "The talented marketeer who knows how to grow and deliver exceptional benefits for the community.",
  },
];

function Team() {
  return (
    <div id="team" className="bg-black text-center text-white py-5">
      <h1>TEAM</h1>
      <Row className="gx-0 d-flex justify-content-center pb-5">
        {date.map(({ id, imgurl, link, name, role }) => (
          <Col lg={2} md={3} sm={4} xs={6} key={`${id}`} className="px-3">
            <div>
              <img className="max-200 my-4 w-100" src={imgurl} alt=""></img>
            </div>
            <a href="{link}" className="linkedin-icon"><FaLinkedinIn /></a>
            <h5 className="my-4">{name}</h5>
            <p className="justify-context pb-5">{role}</p>
          </Col>
        ))}
      </Row>
      <a href="https://discord.gg/cbdallstars" target="blank" className="discord-icon"><FaDiscord /></a>
      <a href="https://www.instagram.com/cbd_all_stars" target="blank" className="instagram-icon"><FaInstagram /></a>
      <Container className="px-5 py-4">
        <Row className="d-flex justify-content-between">
          <Col sm={6}>
            <p className="text-center">The NFT Marketplace Ltd</p>
          </Col>
          <Col sm={6}>
            <p className="text-center">20-22 Wenlock Road, London, England, N1 7GU, UK</p>
          </Col>
        </Row>
      </Container>
      <p><span className="small">ETH address:</span> 0x1aA88705f543F0fc7303974D73A7DeE22d6AdaAE</p>
      <p className="small">Copyright © 2022 https://cbdallstars.io/ | Powered by https://cbdallstars.io/</p>
    </div>
  );
}

export default Team;