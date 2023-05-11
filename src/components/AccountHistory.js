import React from 'react';
import { Col, Table } from 'react-bootstrap'

import '../components/AccountHistory.scss';

const AccountHistory = ({ data }) => {
    const { history } = data;

    return (
        <Col xs={12} lg={8}>
            <h2 className='mb-4 history'>Extrato de conta corrente</h2>
            <Table striped borderless>
                <thead>
                    <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor (R$)</th>
                    <th>Saldo (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map(({ date, description, value, balance }) => (
                        <tr>
                            <td>{date}</td>
                            <td>{description}</td>
                            <td>{value}</td>
                            <td>{balance}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Col>
    )

}    

export default AccountHistory;