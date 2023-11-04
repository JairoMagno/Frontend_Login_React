//import Cadastro from "../cadastro";
import Autenticacao from "./autenticacao";
import Submit from "../submit/submit";
import frase_login from "../../../data/frase_login.json"
import { Form } from "react-bootstrap";
import './formulario.scss';

function Formulario() {
    return (
        <div className="formulario">
            <h1>Login</h1>
            <p>{frase_login.welcome}</p>
            <Form>
                <Autenticacao />
                <Submit />
            </Form>
        </div>
    );
}

export default Formulario;