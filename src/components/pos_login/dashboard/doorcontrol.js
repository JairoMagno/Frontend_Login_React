import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import { useState } from 'react';

function OpenDoor () {

    const [door, setDoor] = useState('Fechado');
    const [color, setColor] = useState('danger');

    const doorStatus = () => setDoor(door === 'Fechado' ? 'Aberto' : 'Fechado');
    const colorStatus = () => setColor(color === 'danger' ? 'success' : 'danger');

    const estiloBotao = {
        '--bs-btn-padding-x': '2rem', 
        'paddingRight': '1.6rem',     // Defina a largura do preenchimento horizontal
      };

    return (
    <section className='door-functions'>
        <section className='open-door'>
            <h2 className='titulo'>Abrir Porta:</h2>
            <Button variant="success" 
                    style={estiloBotao} 
                    size='lg' 
                    className='botao-porta'
                    onClick={() => {
                        doorStatus();
                        colorStatus();}}>
                        Success
            </Button>{' '}
        </section>
        <section className='door-status'>
            <h2 className='titulo'>Status:</h2>
            <Card border="light" 
                  style={{width: '8rem'}} 
                  className="status" 
                  bg={color}>
                <span className='open-close'>{door}</span>
            </Card>
        </section>
    </section>
    );
}


export default OpenDoor