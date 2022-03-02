import React from 'react';
import {
  Navbar,
  Container,
  Nav
}
  from 'react-bootstrap';

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" fixed="top" className='py-4'>
        <Container className='px-5'>
          <Navbar.Brand href="#home" className='logo-txt'>CBD ALL-STARS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link className='navbtn' href="#home">Home</Nav.Link>
              <Nav.Link className='navbtn' href="#story">Story</Nav.Link>
              <Nav.Link className='navbtn' href="#cbd">Cbd Benifits</Nav.Link>
              <Nav.Link className='navbtn' href="#road">Roadmap</Nav.Link>
              <Nav.Link className='navbtn' href="#faq">Faq</Nav.Link>
              <Nav.Link className='navbtn' href="#team">Team</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;