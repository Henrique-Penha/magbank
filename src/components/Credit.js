import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import { 
    faCreditCard,
    faMobile,
    faShoppingCart,
    faWallet,
} from '@fortawesome/free-solid-svg-icons';
import magnet from '../assets/card.jpg';
import './Credit.scss';
import Icontext from './Icontext';

const Credit = () => (
    <Container className='my-5'>
        <Row>
        <Col xs={12} lg={7} className='mb-5 mb-lg-0 px-5 px-lg-0'>
            <Row>
                <h2 className='my-5 credit-card-title'>Cartão de crédito</h2>
            </Row>
            <Row>
                <Col xs={12} lg={6} className='mb-4'>
                    <Icontext icon={faCreditCard} size={2} color='#f05656' textClassName='h5 text-muted'>
                        Crédito Pessoal
                    </Icontext>
                </Col>

                <Col xs={12} lg={6} className='mb-4'>
                    <Icontext icon={faMobile} size={2} color='#f05656' textClassName='h5 text-muted'>
                        APP
                    </Icontext>
                </Col>

                <Col xs={12} lg={6} className='mb-4'>
                    <Icontext icon={faShoppingCart} size={2} color='#f05656' textClassName='h5 text-muted'>
                        Pagamentos Online
                    </Icontext>
                </Col>

                <Col xs={12} lg={6} className='mb-4'>
                    <Icontext icon={faWallet} size={2} color='#f05656' textClassName='h5 text-muted'>
                        Pagamento Digital
                    </Icontext>
                </Col>
            </Row>
        </Col>
            <Col xs={12} lg={5}>
                <Image src={magnet} alt='Magbank Credit Card Example' fluid />
            </Col>
        </Row>
    </Container>
);



export default Credit;
