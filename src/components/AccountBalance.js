import { Col, Tabs, Table, Tab, Button } from "react-bootstrap";

const AccountBalance = ({data}) => {
  const { latestBalance, futureBalance } = data;
   
  return (
    <>
      <Col xs={12} lg={3} className='dashboard__cont'>
        <h2 className='my-5'>Conta Corrente</h2>
        <h6>
          <small>
            <strong>Saldo em conta corrente</strong>
          </small>
        </h6>
        <h4 className='text-success mb-4'>
          <small>R$ </small>500.000<small>,00</small>
        </h4>
        <h6>
          <small>
            <strong>Cheque especial</strong>
          </small>
        </h6>
        <p className="mb-0">Limite disponível</p>
        <p className="mb-4">R$ 200.000,00</p>
        <Button variant="secondary">Ver extrato</Button>
      </Col>
      <Col xs={12} lg={5} className='mt-lg-5'>
        <Tabs className="dashboard__tabs" defaultActiveKey="latest">
          <Tab eventKey="latest" title="Últimos Lançamentos">
            <Table className='dashboard__table' striped borderless>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Valor (R$)</th>
                </tr>
              </thead>
              <tbody>
                {latestBalance.map(({ date, description, value }, key) => (
                  <tr key={key}>
                    <td>{date}</td>
                    <td>{description}</td>
                    <td>{value}</td>
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
                {futureBalance.map(({ date, description, value }, key) => (
                  <tr key={key}>
                    <td>{date}</td>
                    <td>{description}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </Col>
    </>
  )
};

export default AccountBalance;
