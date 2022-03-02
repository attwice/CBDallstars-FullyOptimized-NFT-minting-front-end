import React from "react";
import {
	Row,
	Col,
	Container
} from 'react-bootstrap';

function Story() {
	return (
		<div id="story" className="bg-black pt-100">
			<Container className="px-5">
				<Row className="gx-0">
					<Col md={5} sm={12}>
						<Row>
							<Col lg={6} md={12} className="text-center">
								<img className="story-img mb-3 max-300" src="./images/caro-2.webp" alt="" />
							</Col>
							<Col lg={6} md={12} className="text-center">
								<img className="story-img mb-3 max-300" src="./images/caro-1.webp" alt="" />
							</Col>
							<Col lg={6} md={12} className="text-center">
								<img className="story-img mb-3 max-300" src="./images/caro-8.webp" alt="" />
							</Col>
							<Col lg={6} md={12} className="text-center">
								<img className="story-img mb-3 max-300" src="./images/caro-5.webp" alt="" />
							</Col>
						</Row>
					</Col>
					<Col md={7} className="p-5 text-white">
						<p>STORY</p>
						<h1>Welcome to the<br></br>
							CBD ALL-STARS NFT’s
						</h1>
						<p className="justify-context">
							Our story and this journey is all about continuing to raise awareness
							of the MASSIVE benefits of CBD use.<br></br><br></br>
							The CBD All-Stars NFT Project will grow via supportive marketing, a
							fully engaged Discord community and real tangible benefits.<br></br><br></br>
							The CBD All-Stars community will be the epicentre of everything we do.
							Our mission is to become one of the main ‘awareness beacons’ in the
							CBD universe via each unique CBD All-Stars character being actively
							used as the signal to others, of the benefits of using CBD in your
							life!!!<br></br><br></br>
							CBD All-Stars is the 1st, exclusive private collection of 5,000 CBD
							obsessed characters. They hang out on the Ethereum Blockchain and are
							actively promoting the benefits of CBD products through the ever
							growing community.<br></br><br></br>
						</p>
						<div className="d-flex justify content-around">
							<a href="https://twitter.com/All_Stars_NFT" role="button" className="join-btn mx-auto text-center pt-2">JOIN TWITTER</a>
							<a href="https://discord.gg/cbdallstars" role="button" className="join-btn mx-auto text-center pt-2">JOIN DISCORD</a>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Story;