import Table from 'react-bootstrap/Table';
import cadastro from '../../../data/registros.json'
import './registro.scss';

function Cadastro() {

    const tableHead = ['Usuário', 'Privilégio', 'Curso', 'Email', 'CPF']

  return (
    <div className='tabela'>
        <h1>Usuários Registrados</h1>
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
                {cadastro.map((data, index) => (
                    <tr>
                        <td>{index+1}</td>
                        <td>{data.user}</td>
                        <td>{data.privilegio}</td>
                        <td>{data.curso}</td>
                        <td>{data.email}</td>
                        <td>{data.cpf}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
  );
}

export default Cadastro;