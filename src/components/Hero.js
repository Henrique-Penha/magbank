import React from 'react';
import { Row, Col, Card, Button, Image } from 'react-bootstrap';
import logo from '../assets/magic-logo__mobile.png';
import logoDesktop from '../assets/magic-logo__desktop.png';
import './Hero.scss';



const Hero = ({onClick}) => (
    <Card className='text-center text-light hero overflow-hidden'>
        <Row className='my-lg-5'>
            <Col lg className='text-lg-end my-5'>
                <Image className='d-lg-none' src={logo} />
                <Image className='d-none d-lg-inline-block' src={logoDesktop} />
            </Col>
            
            <Col lg className='text-lg-start my-lg-5'>
                <p>Pague suas contas pelo nosso APP</p>
                <Button variant='outline-light' onClick={onClick} className='mb-5'>
                    Abra sua conta
                </Button>
            </Col>
        </Row>

    </Card>
);

export default Hero;