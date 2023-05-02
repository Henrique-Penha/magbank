import React, { useState } from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import Icontext from './Icontext';
import { 
    faCreditCard,
    faWallet,
    faShieldAlt,
    faUserTie,
 } from '@fortawesome/free-solid-svg-icons';
import './Faq.scss';


const Faq = () => {
    const [index, setIndex] = useState(0);
    const handleClick = (key) => {
        setIndex(key);
      }

    const options = [
        {icon: faCreditCard, text: 'Cartão de crédito e débito'},
        {icon: faWallet, text: 'Conta e abertura'},
        {icon: faShieldAlt, text: 'Token digital'},
        {icon: faUserTie, text: 'Produtos e serviços'},
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
                            <Accordion defaultActiveKey="0"  activeKey={`${index}`} className='faq-accordion'>
                            <Accordion.Item eventKey="0">
                            <Accordion.Header onClick={() => handleClick(0)}>Cartão de crédito e débito</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. 
                            Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. 
                            Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. 
                            Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. 
                            Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                            </Accordion.Body>
                            </Accordion.Item>
                            
                            
                            <Accordion.Item eventKey="1">
                            <Accordion.Header onClick={() => handleClick(1)}>Conta e abertura</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. 
                            Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. 
                            Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. 
                            Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. 
                            Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                            </Accordion.Body>
                            </Accordion.Item>
                            

                            <Accordion.Item eventKey="2">
                            <Accordion.Header onClick={() => handleClick(2)}>Token digital</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. 
                            Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. 
                            Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. 
                            Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. 
                            Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                            </Accordion.Body>
                            </Accordion.Item>
                            

                            <Accordion.Item eventKey="3">
                            <Accordion.Header onClick={() => handleClick(3)}>Produtos e produtos</Accordion.Header>
                            <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. 
                            Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. 
                            Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. 
                            Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. 
                            Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
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