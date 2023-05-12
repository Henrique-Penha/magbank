import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, ButtonGroup, Button, NavDropdown, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./Navigation.scss";
import logo from "../assets/logo.svg";


const Navigation = ({ handleCreateAcc, logged, auth}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    auth.logout(navigate('/'));
  }
  
  return (
  <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
        <Link to="/">
         <img
              src= {logo}
              height="30"
              className="d-inline-block align-top"
              alt="Magbank"
         />
        </Link>
        </Navbar.Brand>

        {
          logged && (
            <>
            <Form>
              <div className='navbar__search-group d-none d-lg-flex'>
                <Form.Control type='text' placeholder='O que você procura?' />
                <Button variant='link'>
                  <FontAwesomeIcon icon={faSearch} color='#FFF' />
                </Button>
              </div>
            </Form>

            <Button variant='outline-light' onClick={handleClick}>
              Sair
            </Button>
              
            </>
          )
        }

        {
          !logged && (
            <>
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
                    <NavDropdown.Item>
                        <Link to="/login">Pessoa Física</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                      <Link to="/login">Pessoa Jurídica</Link>
                      </NavDropdown.Item>
                  </NavDropdown>
                  </Button>

                  <Button variant="outline-light" onClick={handleCreateAcc}>
                    Abra sua conta
                  </Button>
                </ButtonGroup>
              </Navbar.Collapse>
            </>
          )
        }
      </Container>
    </Navbar>

  )
}




export default Navigation;
