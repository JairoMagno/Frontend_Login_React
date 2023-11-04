import data from '../../../data/dados.json';
import { Form, InputGroup } from 'react-bootstrap';
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineVpnKey } from "react-icons/md";

function Autenticacao () {
    return (
        <>
            {data.map((dado, index) => (
                <div key={index} className="campo">
                    <Form.Group className="mb-3" controlId={dado.id}>
                        <Form.Label className='fw-bold'>{dado.name}</Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1">
                                {index === 0 ? <HiOutlineMail /> : <MdOutlineVpnKey />}
                            </InputGroup.Text>
                            <Form.Control type={dado.type} placeholder={dado.placeholder} />
                        </InputGroup>
                    </Form.Group>
                </div>
            ))}
        </>
    );
}

export default Autenticacao;

 