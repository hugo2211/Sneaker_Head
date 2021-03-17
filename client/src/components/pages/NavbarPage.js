import React from 'react';
import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";

const NavbarPage = () => {
  return <div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <LinkContainer to="/profile">
        <Navbar.Brand>Sneakerheads</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" activeKey="/">
          <IndexLinkContainer to="/profile">
            <Nav.Link active={false}>Profile</Nav.Link>
          </IndexLinkContainer>
          <IndexLinkContainer to="/feed">
            <Nav.Link active={false}>Feed</Nav.Link>
          </IndexLinkContainer>
          <IndexLinkContainer to="/upload">
            <Nav.Link active={false}>Upload</Nav.Link>
          </IndexLinkContainer>
          <IndexLinkContainer to="/trending">
            <Nav.Link active={false}>Trending</Nav.Link>
          </IndexLinkContainer>
        </Nav>
        <Nav>
          <Button variant="outline-success">
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
}

export default NavbarPage;