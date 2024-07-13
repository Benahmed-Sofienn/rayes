import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './NavBar.css';

function NavBar() {
  return (
    <>
      <Navbar className='Navbar' data-bs-theme="dark">
        <Container className='NavContainer'>
          <Navbar.Brand href="#home">Rénovation Rais</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#about">A propos</Nav.Link>
            <Nav.Link href="#serv">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
