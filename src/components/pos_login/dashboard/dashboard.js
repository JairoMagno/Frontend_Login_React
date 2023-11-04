import OpenDoor from './doorcontrol';
import registos from '../../../data/registros.json'
import { Card } from "react-bootstrap";
import './dashboard.scss';

function DashBoard () {

    return (
        <section className="dashboard">
            <Card border="light" style={{width: '25rem'}} className="shadow p-3 mb-5 bg-light-tertiary rounded">
                <h1 className='registros'> Registros (Dia) </h1>
                {registos.map((dado, index) => (
                    <h2 key={index}>{dado.user}</h2>
                ))}
            </Card>
            <OpenDoor />
        </section>
    );
}

export default DashBoard