import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  return (
    <Navbar expand="md" className="navbar-dark bg-dark">
      <Container>
        <Navbar.Brand>
          <Link to={`/`}><img src="/images/logo.jpg" alt="logo" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleToggle} />
        <Navbar.Collapse in={expanded}>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to={`/contact`} onClick={() => setExpanded(false)} className="ml-auto">Kontakt</Nav.Link>
            <Nav.Link as={Link} to={`/aboutus`} onClick={() => setExpanded(false)} className="ml-auto">O nas</Nav.Link>
            <Nav.Link as={Link} to={`/faq`} onClick={() => setExpanded(false)} className="ml-auto">FAQs</Nav.Link>
            <Nav.Link as={Link} to={`/basket`} onClick={() => setExpanded(false)} className="ml-auto">Koszyk</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
