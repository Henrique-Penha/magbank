import { useState } from 'react';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/MAGbank-login.svg';

import './Login.scss';

const Login = ({ auth }) => {
    const [name, setName] = useState();
    const [account, setAccount] = useState();
    const navigate = useNavigate();

    const handleSubmit = () => {
        auth.login(name, account, navigate('/dashboard'))
    }
    

    return (
        <section className="login">
            <div className="login__container">
                
                    <Row>
                        <Col className="text-center text-light">
                            <Image src={ logo } className="mb-5"/>
                            <Form>
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Label className="lead">
                                        <strong>Nome e sobrenome</strong>
                                    </Form.Label>
                                    <Form.Control type="text" value={name || ''} onChange={(e) => setName(e.currentTarget.value)} />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                    <Form.Label className="lead">
                                        <strong>Número da Conta</strong>
                                    </Form.Label>
                                    <Form.Control type="number" value={account || ''} onChange={(e) => setAccount(e.currentTarget.value)} />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label className="lead">
                                        <strong>Senha</strong>
                                    </Form.Label>
                                    <Form.Control type="password" />
                                </Form.Group>
                                
                                    <Button variant="success" type="submit" onClick={() => handleSubmit()}>
                                        Criar conta
                                    </Button>
                                                            
                            </Form>
                        </Col>              
                    </Row>
                
            </div>
        </section>
    )
}

export default Login;