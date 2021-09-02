import React from "react";
import Link from "next/link";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/Home.module.css";

import Logo from "../public/logoHeader.svg";

const NavigationBar = ({ isHome }) => {
  return (
    <>
      <Navbar
        sticky="top"
        style={{ backgroundColor: "#F0F6F6" }}
        variant="light"
        expand="md"
      >
        <Container fluid>
          <Link href="/">
            <Navbar.Brand href="#home">
              <Logo alt="Logo" width="50" height="30" className="" />{" "}
              <small>L. Felipe Moreno & Asociados</small>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="me-auto">
              {isHome ? (
                <>
                  <Link href="/servicios">
                    <span className="nav-link" style={{ cursor: "pointer" }}>
                      Servicios
                    </span>
                  </Link>

                  <a
                    href="#contacto"
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                  >
                    Contacto
                  </a>
                </>
              ) : null}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
