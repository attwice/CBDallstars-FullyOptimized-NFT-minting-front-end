import React from "react";
import {
  Row,
  Col
} from 'react-bootstrap';

const date = [
  {
    id: 1,
    number: "00",
    content: "Days",
  },
  {
    id: 2,
    number: "00",
    content: "Hours",
  },
  {
    id: 3,
    number: "00",
    content: "Minutes",
  },
  {
    id: 4,
    number: "00",
    content: "Seconds",
  },
];

function Home() {
  return (
    <div id="home" className="home mx-auto">
      <Row className="gx-0 pt-100">
        <Col md={6} className="d-flex justify-content-center">
          <a href="https://mint.cbdallstars.io/" role="button" className="mintbtn text-white text-center">
            MINT HERE
          </a>
        </Col>
        <Col md={6}>
          <div className="d-flex justify-content-center">
            {date.map(({ id, number, content }) => (
              <div key={`${id}_${number}`} className="date-dispay text-white mx-1 py-2 mt-3">
                <h2 className="text-center">{number}</h2>
                <p className="text-center">{content}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;