import React from "react";
import { Accordion, Container } from "react-bootstrap";

const date = [
  {
    id: 1,
    title: "CBD ALL STARS NFT",
    content: "1st exclusive digital collection of 5,000 CBD-obsessed characters, Own distinctive qualities,    Own distinctive features,    Own distinctive accessories,    Varying levels of rarity ,   The race is on to find the ultra-rare CBD All-Stars.    Your character will be 100% unique,    You don’t want to miss this., CBD All-Stars are unique, digital collectables, They hang out on the Ethereum blockchain.    They are crazy about CBD products and their BENEFITS!, and just like the many types of CBD products available, they are not created equal.    It’s the ultra-rare characters that everyone wants to get their hands on.",
  },
  {
    id: 2,
    title: "Why should I buy a CBD All-Star NFT?",
    content: "This is the 1st EVER collection of CBD NFT’s!!!, Get in the WIP, Don’t miss out",
  },
  {
    id: 3,
    title: "What is an NFT?",
    content: "Non-fungible tokens (NFTs) are the future of digital trading and gaming, and now is the perfect time to get involved.",
  },
  {
    id: 4,
    title: "Is my NFT safe?",
    content: "NFTs can’t be copied, faked or stolen – they’re based on the blockchain, fully decentralised and peer to peer. That means irrefutable ownership." +
      "Every CBD All-Star gets its very own NFT tag assigned that’s been uniquely minted on the Ethereum blockchain, and can be bought or sold using Ethereum cryptocurrency.",
  },
  {
    id: 5,
    title: "Which wallet can I use to mint and hold my NFT?",
    content: "To buy an NFT you need to either have or download a MetaMask wallet.",
  },
  {
    id: 6,
    title: "How do I connect my wallet?",
    content: "Click through the ‘connect wallet’ button.",
  },
  {
    id: 7,
    title: "What is Minting?",
    content: "Minting an NFT means generating a random but unique digital art piece that is created on the Ethereum blockchain. It can be traced from Mint and can be resold or held in your wallet.",
  },
  {
    id: 8,
    title: "Where can I view my NFT?",
    content: "You can view your NFT in your MetaMask wallet.",
  },
  {
    id: 9,
    title: "Can I sell my NFT?",
    content: "There are many different platforms where you can list and resell your NFT.",
  },
  {
    id: 10,
    title: "What is blockchain and how does it work?",
    content: "Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system. … Each block in the chain contains a number of transactions, and every time a new transaction occurs on the blockchain, a record of that transaction is added to every participant’s ledger.",
  },
  {
    id: 11,
    title: "What is an Ethereum and how does it work?",
    content: "Ethereum is an open software platform which allows users to build a range of decentralised applications. … Like Bitcoin, Ethereum works via a public blockchain network; while Bitcoin is used to track ownership of currency, the Ethereum blockchain focuses on running the programming code of any decentralised application.",
  },
  {
    id: 12,
    title: "Why are NFT decentralised?",
    content: "An NFT is a form of digital asset based on a network that is distributed across a large number of computers. This decentralised structure allows them to exist outside the control of governments and central authorities.",
  },
  {
    id: 13,
    title: "What are the other health benefits are there form CBD oil?",
    content: "People that support the use of CBD claim that CBD oil can treat a variety of health problems including: Acne, Anxiety, Chronic pain, Depression, Drug use and withdrawal, Epilepsy, Glaucoma, High blood pressure, Insomnia, Muscle spasms, Parkinson’s disease, Poor appetite There are only a few clinical studies found on the effects of CBD oil. As such, some of these health claims are better supported by research than others.",
  },
  {
    id: 14,
    title: "What is blockchain and how does it work?",
    content: "Clinical research has shown that CBD oil can cause side affects. The types and severity can vary from one person to the next. These can include, anxiety, changes in appetite and mood, diarrhoea, dizziness, drowsiness, dry mouth, nausea and vomiting.",
  },
  {
    id: 15,
    title: "What are the other forms of CBD?",
    content: "CBD can come in many forms but the most frequent are CBD capsules, CBD dummies, and CBD sprays for under the tongue.",
  },
  {
    id: 16,
    title: "What is THC and is there any in CBD?",
    content: "THC is the other chemical in marijuana, it is the short name for tetrahydrocannabinol. It is THC that is responsible for the psychoactive effects of cannabis, in other words, the bit that makes you feel high. CBD generally doesn’t have THC, although trace amounts might be in products sold.",
  },
];

function Faq() {
  return (
    <div id="faq" className="bg-black pb-5">
      <Container className="px-5">
        <h1 className="text-center text-white py-5">FREQUENTLY ASKED QUESTIONS</h1>
        <Accordion>
          {date.map(({ id, title, content }) => (
            <Accordion.Item key={`${id}`} eventKey={id}>
              <Accordion.Header><strong>{title}</strong></Accordion.Header>
              <Accordion.Body className="text-white">
                {content}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
}

export default Faq;