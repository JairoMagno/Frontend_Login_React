import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

function OpenDoor () {

    const estiloBotao = {
        'paddingRight': '2.5rem', // Defina a largura do preenchimento horizontal desejada
      };

    return (
    <section className='door-functions'>
        <section className='open-door'>
            <h2 className='titulo'>Abrir Porta:</h2>
            <Button variant="success" style={estiloBotao} size='lg' className='botao-porta'>Success</Button>{' '}
        </section>
        <section className='door-status'>
            <h2 className='titulo'>Status:</h2>
            <Card border="light" style={{width: '8rem'}} className="status" bg="success">
                <span className='open-close'>Aberto</span>
            </Card>
        </section>
    </section>
    );
}


export default OpenDoor