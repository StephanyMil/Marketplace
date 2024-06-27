import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '/home/stephany.milhomem/my-marketplace/src/assets/open.png'; 
import './Navbar.css'; 

const NavigationBar = () => {
  return (
    <header className="marketplace-header">
      <Navbar className="custom-navbar">
        <Container className="d-flex align-items-center justify-content-between">
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src={logo}
              className="logoOpen"
              alt="Logo"
            />
            <span className="ml-3 marketplace-text">Marketplace</span> {/* Aplicando a classe marketplace-text */}
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#meus-servicos" className="meus-servicos-link">Meus Serviços</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavigationBar;