import React from 'react';
import { Container, Row, Image, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import log from '../assets/MAGbank.png'
import applestore from '../assets/applestore.png';
import googleplay from '../assets/googleplay.png';
import { faFacebookSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

const Footer = () => {
    return (
    <footer className='footer'>
        <Container>
            <Row className='text-center my-4'>
                <Col xs={12} lg={6} className='text-lg-start align-items-center'>
                    <Image src={log}/>
                </Col>

                <Col xs={12} lg={4} className='store align-items-center'>
                    <Image src={applestore}/>
                    <Image src={googleplay} className='ms-3 my-3 my-lg-0' />
                </Col>

                <Col xs={12} lg={2} className='d-flex justify-content-center'>
                    <FontAwesomeIcon icon={faFacebookSquare} color='#7c7c7c' size='2x' />
                    <FontAwesomeIcon icon={faTwitter} color='#7c7c7c' size='2x' className='ms-2' />
                    <FontAwesomeIcon icon={faYoutube} color='#7c7c7c' size='2x' className='ms-2' />
                </Col>
            </Row>
        </Container>
    </footer>
    )
};

export default Footer;