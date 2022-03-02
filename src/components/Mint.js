import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const date = [
  {
    id: 1,
    title: "Set up an exchange account",
    content: "1.Choose a well-known name (Coinbase, Binance, WhiteBIT for example). This is where you will buy, sell and trade your cryptocurrency. It’s a quick process to set up an account - you’ll just need to enter your details, verify your identity and shortly after you’ll receive a notification that you’re good to go.",
  },
  {
    id: 2,
    title: "Set up a wallet",
    content: "2.Set up a wallet. Wallets are where you store your NFTs and coins longer-term, and it’s where you have total control over your assets. It’s more secure than an exchange account long-term. You will need an online wallet MetaMask, this is your own set of ‘keys’ which must be kept private. As the saying goes, ‘no keys, no crypto’.",
  },
  {
    id: 3,
    title: "Transfer crypto",
    content: "3.Buy Ethereum (ETH) in your exchange and transfer it to your wallet. To do this you need to copy the ‘receive’ address from your MetaMask wallet. Then send ETH to the copied address. Make sure you paste correctly.",
  },
  {
    id: 4,
    title: "Head to the minting page",
    content: "4.Connect your wallet so the page knows where to send your NFT.",
  },
  {
    id: 5,
    title: "Click ‘Mint Now’",
    content: "5.Each CBD All-Star is assigned a unique tag at the time of minting. The minting page will create a smart contract that links the randomly generated NFT to your wallet, takes the payment and proves ownership.",
  },
];

function Mint() {
  return (
    <div className="bg-dark text-white text-center py-5">
      <Container className="px-5">
        <h1>HOW TO MINT</h1>
        <p className="my-4">
          Minting NFTs is easy, but you’ll need cryptocurrency to
          buy and sell. Follow these steps to get involved:
        </p>
        <Row className="d-flex justify-content-center mb-5">
          {date.map(({ id, title, content }) => (
            <Col lg={3} md={4} sm={6} xs={12}>
              <div key={`${id}`}>
                <h5 className="my-4">{title}</h5>
                <p className="justify-context">{content}</p>
              </div>
            </Col>
          ))}
        </Row>
        <a href="https://mint.cbdallstars.io/" role="button" className="joinus-btn text-center">MINT HERE</a>
      </Container>
    </div>
  );
}

export default Mint;