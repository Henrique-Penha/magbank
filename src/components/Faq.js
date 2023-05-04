import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { faCreditCard, faShieldAlt, faUserTie, faWallet } from '@fortawesome/free-solid-svg-icons';

import Icontext from './Icontext';
import './Faq.scss';

const Faq = () => {
  const [index, setIndex] = useState(0);
  const handleClick = (key) => {
    setIndex(key);
  }

  const options = [
    { icon: faCreditCard, text: 'Cartão de crédito e débito' },
    { icon: faWallet, text: 'Conta e abertura' },
    { icon: faShieldAlt, text: 'Token digital' },
    { icon: faUserTie, text: 'Produtos e serviços' },
  ];

  return (
    <section className='faq text-light'>
      <Container className='py-5'>
        <Row className='justify-content-center'>
          <h2 className='faq-title my-5'>Dúvidas frequentes</h2>
        </Row>

        <Row>
          <Col xs={12} lg={6} className='faq-icons'>
            {options.map(({ icon, text }, key) => (
              <Icontext
                icon={icon}
                size={3}
                className="faq-clickable mb-3"
                textClassName="lead"
                color={key === index ? '#fff' : '#bbb'}
                onClick={() => handleClick(key)}
                key={key}
              >
                {text}
              </Icontext>
            ))}
          </Col>

          <Col xs={12} lg={6}>
            <Accordion defaultActiveKey="0" activeKey={`${index}`} className="faq-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header onClick={() => handleClick(0)}>Cartão de crédito e débito</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header onClick={() => handleClick(1)}>Conta e abertura</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header onClick={() => handleClick(2)}>Token digital</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header onClick={() => handleClick(3)}>Produtos e serviços</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Faq;