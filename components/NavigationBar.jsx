import React from "react";
import Link from "next/link";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../public/logoHeader.svg";

const NavigationBar = ({ isHome }) => {
  return (
    <>
      <Navbar sticky="top" style={{backgroundColor:'#F0F6F6'}}variant="light" expand="md">
        <Container fluid>
          <Link href="/">
            <Navbar.Brand href="#home">
              <Logo alt="Logo" width="50" height="30" className="" />{" "}
              L. Felipe Moreno & Asociados
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
