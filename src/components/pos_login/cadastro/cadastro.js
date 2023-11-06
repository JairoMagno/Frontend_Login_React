import { Card, Form, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import cadastro from '../../../data/cadastro.json';
import './cadastro.scss';

function Cadastro () {


    return (
        <section className="cadastrar">
            <Form>
                <Card border="light" style={{width: '30rem'}} className="shadow p-3 mb-5 bg-light-tertiary rounded">
                    <h1> Cadastrar Novo Usuário</h1>
                    {cadastro.map((data, index) => (
                        <Form.Group as={Row} className="mb-3" controlId={data.id}>
                            <Form.Label column sm="2" className='fw-bold'>{data.name}</Form.Label>
                                <Col sm="10">
                                    <Form.Control type={data.type} placeholder={data.placeholder} />
                                </Col>
                        </Form.Group>
                    ))}
                    <Button variant="primary">Cadastrar</Button>{' '}
                </Card>
            </Form>
        </section>
    );
}

export default Cadastro;