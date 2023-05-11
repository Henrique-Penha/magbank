import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Dashboard.scss";
import AccountBalance from "../components/AccountBalance";
import AccountHistory from "../components/AccountHistory";
import AccountPayments from "../components/AccountPayments";



const Dashboard = ({ className }) => {
  const [activeLink, setActiveLink] = useState(0);

  const links = [
    { text: 'Minha Conta', path: '' },
    { text: 'Pagamentos', path: 'payments' },
    { text: 'Extrato', path: 'history' },
  ];

  const data = {
    latestBalance: [
      {
        date: "22/07",
        description: "PARCELA DO APT 012345",
        value: "1.200,00",
      },
      { date: "21/07", description: "SUPERMERCADO 023345", value: "3.000,00" },
      { date: "20/07", description: "NETFLIX 516375", value: "50,00" },
      { date: "19/07", description: "SAQUE 24H 612345", value: "1.000,00" },
      { date: "18/07", description: "FARMACIA 986545", value: "300,00" },
    ],

    futureBalance: [
      {
        date: "22/08",
        description: "PARCELA DO APT 012345",
        value: "1.200,00",
      },
      {
        date: "22/09",
        description: "PARCELA DO APT 223345",
        value: "1.200,00",
      },
      {
        date: "22/10",
        description: "PARCELA DO APT 616375",
        value: "1.200,00",
      },
      {
        date: "22/11",
        description: "PARCELA DO APT 786545",
        value: "1.200,00",
      },
      {
        date: "22/11",
        description: "PARCELA DO APT 786545",
        value: "1.200,00",
      },
    ],

    history: [
      {
        date: "22/07",
        description: "DEPÓSITO",
        value: "5.000,00",
        balance: "",
      },
      {
        date: "22/07",
        description: "SALDO DO DIA",
        value: "",
        balance: "505.000,00",
      },
      {
        date: "21/07",
        description: "SHOPPING PB 203844",
        value: "550,00-",
        balance: "",
      },
      {
        date: "21/07",
        description: "SUPERMERCADO 023345",
        value: "3.000,00-",
        balance: "",
      },
      {
        date: "21/07",
        description: "SALDO DO DIA",
        value: "",
        balance: "501.450,00",
      },
      {
        date: "16/07",
        description: "COMPRA INTERNET 51073",
        value: "400,00-",
        balance: "",
      },
      {
        date: "16/07",
        description: "ESTACIONAMENTO 58973",
        value: "10,00-",
        balance: "",
      },
      {
        date: "16/07",
        description: "SALDO DO DIA",
        value: "",
        balance: "501.040,00",
      },
      {
        date: "17/07",
        description: "RESTAURANTE BOM TEMPERRO 600345",
        value: "40,00",
        balance: "",
      },
      {
        date: "17/07",
        description: "SAQUE 24H 612345",
        value: "1.000,00",
        balance: "",
      },
  	  {
        date: "17/07",
        description: "SALDO DO DIA",
        value: "",
        balance: "500.000,00",
      }

    ]
  };

  return (
    <Container className={`dashboard py-5 ${className ? className : ''}`}>
      <Row>
        <Col xs={12} lg={4}>
          <Row className='d-flex align-content-center mb-5'>
            <Col xs={3}>
              <span className='dashboard__user-avatar'>
                <FontAwesomeIcon icon={faCircle} size="5x" color="#f8f9f" />
                <FontAwesomeIcon
                  className='dashboard__user-icon'
                  icon={faUser}
                  size='3x'
                  color='#7c7d7d'
                />
              </span>
            </Col>

            <Col xs={9}>
              <h3>Henrique Penha</h3>
              <p className='text-muted'>ag: 1234 c/c:4321-5</p>
            </Col>
          </Row>

          <Row>
            {links.map(({ text, path }, key) => (
              <Link
                className='dashboard__link'
                to={path}
                key={key}
              >
                <Button
                  className={`dashboard__button ${
                  key === activeLink ? 'dashboard__button--active' : ''
                  }`}
                  variant='link'
                  size='lg'
                  block="true"
                  onClick={() => setActiveLink(key)}
                >
                  {text}
                </Button>
              </Link>
            ))}
          </Row>
        </Col>

          <Routes>
            <Route path='/payments' element={<AccountPayments />} />
            <Route path='/history' element={<AccountHistory data={data} />} />
            <Route path='/' element={<AccountBalance data={data} />} />
          </Routes>
        
      </Row>
    </Container>
  );
}

export default Dashboard;
