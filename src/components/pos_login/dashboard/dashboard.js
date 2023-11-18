import Table from 'react-bootstrap/Table';
import OpenDoor from './doorcontrol';
import acesso from '../../../data/acesso.json'
import './dashboard.scss';

function DashBoard () {

    const tableHead = ['Usuário', 'Privilégio', 'Horário']

    return (
        <section className="dashboard">
            <section className='table'>
                <h1>Registros (DIA)</h1>
                <Table responsive striped>
                    <thead>
                        <tr>
                            <th></th>
                            {tableHead.map((data, index) => (
                                <th>{data}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {acesso.map((data, index) => (
                            <tr>
                                <td>{index+1}</td>
                                <td>{data.user}</td>
                                <td>{data.privilegio}</td>
                                <td>{data.horario}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </section>
            <OpenDoor />
        </section>
    );
}

export default DashBoard