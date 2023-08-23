import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import './navbar.scss';
import logoGPEB from '../../static/Logo_GPEB_Menor_40x46.png';

function NavBar () {
    return (
        <Navbar className="bg-light-tertiary">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={logoGPEB} roundedCircle />
                    </Col>
                </Row>
                <Navbar.Brand href="#home">LIHOM</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="pe-4">
                        Não tem uma conta?
                    </Navbar.Text>
                    <Button variant="primary" type="submit" className="btn-sm" id='botao'>Criar uma conta</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;