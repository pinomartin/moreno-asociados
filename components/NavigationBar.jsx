import React, { useState } from "react";
import Link from "next/link";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/Home.module.css";

import Logo from "../public/logoHeader.svg";

const NavigationBar = ({ isHome }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar
        sticky="top"
        style={{ backgroundColor: "#F0F6F6" }}
        variant="light"
        expand="md"
        expanded={expanded}
      >
        <Container fluid>
          <Link href="/">
            <Navbar.Brand href="#home">
              <Logo alt="Logo" width="35" height="35" />
              <small>L. F. Moreno y Asociados</small>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
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
                    onClick={() => setExpanded(false)}
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
