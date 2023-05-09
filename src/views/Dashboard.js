import React from 'react';
import { Container, Row, Col, Button, Tab, Tabs, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons';

import './Dashboard.scss';

const Dashboard = () => {
    const latestData = [
        {date: '22/07', description: 'PARCELA DO APT 012345', value: '1.200,00'},
        {date: '21/07', description: 'SUPERMERCADO 023345', value: '3.000,00'},
        {date: '20/07', description: 'NETFLIX 516375', value: '50,00'},
        {date: '19/07', description: 'SAQUE 24H 612345', value: '1.000,00'},
        {date: '18/07', description: 'FARMACIA 986545', value: '300,00'},
    ];

    const futureData = [
        {date: '22/08', description: 'PARCELA DO APT 012345', value: '1.200,00'},
        {date: '22/09', description: 'PARCELA DO APT 223345', value: '1.200,00'},
        {date: '22/10', description: 'PARCELA DO APT 616375', value: '1.200,00'},
        {date: '22/11', description: 'PARCELA DO APT 786545', value: '1.200,00'},
        {date: '22/11', description: 'PARCELA DO APT 786545', value: '1.200,00'},
    ];
    
    return (
    <Container className="dashboard py-5">
        <Row>
            <Col xs={12} lg={4}>
                <Row className="d-flex align-content-center mb-5">
                    <Col xs={3}>
                        <span className="dashboard__user-avatar">
                            <FontAwesomeIcon icon={faCircle} size='5x' color='#f8f9f' />
                            <FontAwesomeIcon className="dashboard__user-icon" icon={faUser} size='3x' color='#7c7d7d' />
                        </span>
                    </Col>              
                    
                    <Col xs={9}>
                        <h3>Henrique Penha</h3>
                        <p className="text-muted">ag: 1234 c/c:4321-5</p>
                    </Col>
                </Row>

                <Row> 
                    <Button className="dashboard__button dashboard__button--active text-left d-flex" variant="link" size="lg">
                        Minha Conta
                    </Button>
                        
                    <Button className="dashboard__button text-left d-flex" variant="link" size="lg">
                        Pagamentos
                    </Button>
                        
                    <Button className="dashboard__button text-left d-flex" variant="link" size="lg">
                        Extrato
                    </Button>
                </Row> 
               
            </Col>
            <Col xs={12} lg={3} className="dashboard__cont">
                <h2 className="my-5">Conta Corrente</h2>
                <h6><small><strong>Saldo em conta corrente</strong></small></h6>
                <h4 className="text-success mb-4">
                    <small>R$ </small>500.000<small>,00</small>
                </h4>
                <h6><small>
                    <strong>Cheque especial</strong>
                </small></h6>
                <p className="mb-0">Limite disponível</p>
                <p className="mb-4">R$ 200.000,00</p>
                <Button variant="secondary">Ver extrato</Button>
            </Col>
            <Col xs={12} lg={5} className="mt-lg-5">
                <Tabs
                    className="dashboard__tabs"
                    defaultActiveKey="latest"
                    >
                    <Tab eventKey="latest" title="Últimos Lançamentos">
                        <Table className="dashboard__table" striped borderless>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor (R$)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {latestData.map(({ date, description, value }) => (
                                    <tr>
                                        <td>{ date }</td>
                                        <td>{ description }</td>
                                        <td>{ value }</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="future" title="Lançamentos Futuros">
                        <Table striped borderless>
                                <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Descrição</th>
                                        <th>Valor (R$)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {futureData.map(({ date, description, value }) => (
                                        <tr>
                                            <td>{ date }</td>
                                            <td>{ description }</td>
                                            <td>{ value }</td>
                                        </tr>
                                    ))}
                                </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    </Container>
    );
};

export default Dashboard;