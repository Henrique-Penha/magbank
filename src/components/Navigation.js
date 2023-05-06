import React from "react";
import { Container, Navbar, Nav, ButtonGroup, Button, NavDropdown } from "react-bootstrap";
import "./Navigation.scss";
import logo from "../assets/logo.svg";


const Navigation = ({ handleCreateAcc }) => (
  <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
        <img
              src= {logo}
              height="30"
              className="d-inline-block align-top"
              alt="Magbank"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#cartao">Cartão</Nav.Link>
            <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
          </Nav>

          <ButtonGroup>
            <Button variant='outline-light'>
            <NavDropdown title="Acessar minha conta" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action4">
                  Pessoa Física
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Pessoa Jurídica
                </NavDropdown.Item>
              </NavDropdown>
            </Button>

            <Button variant="outline-light" onClick={handleCreateAcc}>
              Abra sua conta
            </Button>
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>

);




export default Navigation;
