import React from "react";
import Link from "next/link";
import { Navbar, Container } from "react-bootstrap";
import Logo from "../public/logoHeader.svg";

const NavigationBar = () => {
  return (
    <>
      <Navbar sticky="top" bg="light" expand="md">
        <Container fluid>
          <Link href="/">
            <Navbar.Brand href="#home">
              <Logo alt="Logo" src={Logo} width="50" height="30" className="" />{" "}
              L. Felipe Moreno & Asociados
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
