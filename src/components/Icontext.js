import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Icontext.scss';

const Icontext = ({ 
    icon,
    size = 1,
    color = '#000',
    className = '',
    textClassName = '',
    children, 
}) => (
    <Row>
        <Col>
            <Row>
                <Col xs={size} className=''>
                    <FontAwesomeIcon icon={icon} size={`${size}x`} color={color} />
                </Col>
                <Col xs={12 - size} className={`${textClassName} m-0`}>
                    {children}
                </Col>
            </Row>
        </Col>
    </Row>

);

export default Icontext;