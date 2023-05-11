import React, { useState } from "react";
import { Col, Tabs, Tab, Button, Form, Row } from "react-bootstrap";

import '../components/AccountPayments.scss';

const AccountPayments = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  
  return (
    <>
      <Col xs={12} lg={8} className='payments'>
        <h2 className='payments__pgt'>Pagamentos</h2>
        <Tabs className="payments__tabs" defaultActiveKey="boleto">
          <Tab eventKey="boleto" title="Boleto">
            <Form>
                <Form.Group controlId="formBarCode" className='my-4'>
                    <Form.Label>Código de barras</Form.Label>
                    <Form.Control type='number' placeholder='Insira o código de barras' />
                </Form.Group>
                <Form.Group controlId="formPaymentType" className='mb-4'>
                    <Form.Label>Forma de pagamento</Form.Label>
                    <div className='d-flex'>
                    <Form.Check type='radio' id='debit' label='Débito em Conta Corrente' name='paymentType'/>
                    <Form.Check type='radio' id='credit' label='Cartão de Crédito em corrente' name='paymentType' className="payments__check"/>
                    </div>
                </Form.Group>
                <Button variant='success' className='payments__button'>Continuar</Button>
            </Form>
          </Tab>
            <Tab eventKey="transfer" title="Transferência">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="my-5">
                  <Form.Group as={Col} md="4" controlId="validation1">
                    <Form.Label>Banco</Form.Label>
                    <Form.Select aria-label="Selecione" required>
                      <option disabled selected>Selecione</option>
                      <option value="1">Itua</option>
                      <option value="2">Caixai</option>
                      <option value="3">Bradex</option>
                      <option value="4">Sintander</option>
                      <option value="5">Nubink</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Selecione um banco
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validation2">
                    <Form.Label>Agência</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder=" "
                    />
                    <Form.Control.Feedback type="invalid">
                      Coloque o número da agência
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validation3">
                    <Form.Label>Conta corrente</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder=" "
                    />
                    <Form.Control.Feedback type="invalid">
                      Coloque o número da conta
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validation4">
                    <Form.Label>Valor da transferência</Form.Label>
                    <Form.Control type="number" placeholder="" required />
                    <Form.Control.Feedback type="invalid">
                      Coloque o valor desejado
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validation5">
                    <Form.Label>Identificação nos extratos</Form.Label>
                    <Form.Control type="text" placeholder="" required />
                    <Form.Control.Feedback type="invalid">
                      Coloque a identificação nos extratos
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button variant='success' type="submit" className='my-4'>Continuar</Button>
              </Form>
          </Tab>
        </Tabs>
      </Col>
    </>
  )
};



export default AccountPayments;