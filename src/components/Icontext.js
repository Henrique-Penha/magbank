import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Icontext.scss';

const Icontext = ({ 
    icon,
    size = 1,
    color = '#fff',
    className,
    textClassName = '',
    children, 
    onClick
}) => {
        return (
            <Row className={`d-flex align-items-center ${className}`} onClick={onClick}>
                <Col xs={size} className='d-flex justify-content-center'>
                    <FontAwesomeIcon icon={icon} size={`${size}x`} color={color} />
                </Col>
                <Col xs={12 - size} className={`${textClassName} m-0`}>
                    {children}
                </Col>
            </Row>
        )
    };

    export default Icontext;