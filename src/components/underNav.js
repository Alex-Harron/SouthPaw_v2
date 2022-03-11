import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'

function UnderNav(){
    return(
    <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
            <Nav className="me-auto">
                <Nav.Link href="#electronics">Electronics</Nav.Link>
                <Nav.Link href="#sports">Sports</Nav.Link>
                <Nav.Link href="#office">Office Supplies</Nav.Link>
                <Nav.Link href="#kitchen">Kitchen</Nav.Link>
                <Nav.Link href="#fun">Fun & Misc</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}

export default UnderNav;