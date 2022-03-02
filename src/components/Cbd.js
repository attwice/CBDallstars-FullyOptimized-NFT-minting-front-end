import React from "react";
import {
	Row,
	Col,
	Container,
	Carousel
} from 'react-bootstrap';

function Cbd() {
	return (
		<div id="cbd" className="pt-100 bg-black text-white">
			<Container className="px-5">
				<Row className="gx-0">
					<Col lg={8} md={6}>
						<h1 className="text-center my-5">CBD BENEFITS</h1>
						<p className="justify-context">
							CBD oil is an extract of Cannabis indica and Cannabis sativa,
							the plants used to make marijuana. It is the short name for
							cannabidiol and it is greatly believed to have some excellent
							health benefits and can help relieve the following problems:<br></br><br></br>
						</p>
						<p className="px-3">
							Anxiety <br></br>
							Suppressing Addiction <br></br>
							Nerve Pain <br></br>
							High Blood Pressure <br></br>
							Seizures Stress <br></br><br></br>
						</p>
						<p className="justify-context">
							The CBD industry is flourishing, conservatively projected to hit
							$16 billion in the United States by 2025. More than 60 percent
							of CBD users have taken it for anxiety, Chronic pain, insomnia
							and depression. Kim Kardashian, for example, turned to the product
							when “freaking out” over the birth of her fourth baby. The Professional
							golfer Bubba Watson drifts off to sleep with it. And Martha
							Stewart’s French bulldog uses it to relax!!<br></br>
							The Community is strong!!!<br></br>
							Over 100m Americans have taken CBD!
						</p>
					</Col>
					<Col lg={4} md={6} className="p-5 align-self-center">
						<Carousel fade className="my-auto">
							<Carousel.Item interval={2000}>
								<img
									className="d-block w-100 max-300 mx-auto"
									src="./images/caro-1.webp"
									alt="First slide"
								/>
							</Carousel.Item>
							<Carousel.Item interval={2000}>
								<img
									className="d-block w-100 max-300 mx-auto"
									src="./images/caro-2.webp"
									alt="Second slide"
								/>
							</Carousel.Item>
							<Carousel.Item interval={2000}>
								<img
									className="d-block w-100 max-300 mx-auto"
									src="./images/caro-3.webp"
									alt="Third slide"
								/>
							</Carousel.Item>
							<Carousel.Item interval={2000}>
								<img
									className="d-block w-100 max-300 mx-auto"
									src="./images/caro-4.webp"
									alt="First slide"
								/>
							</Carousel.Item>
							<Carousel.Item interval={2000}>
								<img
									className="d-block w-100 max-300 mx-auto"
									src="./images/caro-5.webp"
									alt="Second slide"
								/>
							</Carousel.Item>
							<Carousel.Item interval={2000}>
								<img
									className="d-block w-100 max-300 mx-auto"
									src="./images/caro-6.webp"
									alt="Third slide"
								/>
							</Carousel.Item>
						</Carousel>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Cbd;