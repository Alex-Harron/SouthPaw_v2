import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

function Navigation() {
    return (
<Navbar collapseOnSelect expand="lg" className='nav'>
  <Container>
  <Navbar.Brand href="#home">SouthPaw Marketplace</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link eventKey={1} href="#about">
        About Us
      </Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#pricing">Cart</Nav.Link>
      <NavDropdown title="Account" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Sign Out</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Your Cart</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">View Profile</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navigation;