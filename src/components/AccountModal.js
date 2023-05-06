import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap'

const AccountModal = ({show, handleClose}) => (
    <Modal show={show} inHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Abra sua Conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" contrelId="FormBasicName">
                    <Form.Label>Seu nome</Form.Label>
                    <Form.Control type="text" placeholder="Seu nome" />
                </Form.Group> 

                <Form.Group className="mb-3" contrelId="FormBasicEmail">
                    <Form.Label>Seu email</Form.Label>
                    <Form.Control type="email" placeholder="Seu email" />
                </Form.Group> 

                <Form.Group className="mb-3" contrelId="FormBasicCity">
                    <Form.Label>Sua cidade</Form.Label>
                    <Form.Control as='select'>
                        <option value="1">Curitiba - PR</option>
                        <option value="2">Florianópolis - SC</option>
                        <option value="3">João Pessoa - PB</option>
                        <option value="4">Rio de Janeiro - RJ</option>
                        <option value="5">São Paulo - SP</option>
                    </Form.Control>
                </Form.Group> 

                <Form.Check
                    type="checkbox"
                    id="checkbox"
                    label="Eu li e concordo com os termos de uso"
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Criar conta
            </Button>
        </Modal.Footer>
    </Modal> 
)

export default AccountModal;