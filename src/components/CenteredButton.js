import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';


const CenteredButton = ({ children } ) => (
    <Container>
    <Row>
      <Col className='d-flex justify-content-center'>
        <Button className='my-5' variant="success" size='lg'>
          {children}
        </Button>
      </Col>
    </Row>
    </Container>
);


export default CenteredButton;