import { faGlobe, faMobile, faMobileAlt, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Icontext from './Icontext';

import './Institutional.scss';

const Institutional = ({onClick}) => (
    <section className='institutional text-light py-5'>
        <Container>
            <Row>
            <Col xs={12} lg={5} />
            <Col xs={12} lg={7}>
                <h2 className='institutional-titlie my-5'>Já nascemos digital</h2>
                <p className='institutional-text mb-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. 
                Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. 
                Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. 
                Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. 
                Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                </p>

                <Icontext icon={faMobileAlt} color='#fff' className='institucional-icons mb-2'>
                    Sem fila e sem burogracia
                </Icontext>

                <Icontext icon={faMobile} color='#fff' className='institucional-icons mb-2'>
                    Simples e prático
                </Icontext>

                <Icontext icon={faGlobe} color='#fff' className='institucional-icons mb-2'>
                    Abertura de conta 100% online
                </Icontext>

                <Icontext icon={faShieldAlt} color='#fff' className='institucional-icons mb-2'>
                    Transações mais seguras
                </Icontext>

                <Button variant='outline-light' className='mt-5' onClick={onClick}>
                    Abra sua conta
                </Button>
            </Col>
            </Row>
        </Container>
    </section>
);



export default Institutional;