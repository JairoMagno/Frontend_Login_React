import { Button } from "react-bootstrap";
import { HiOutlineMail } from "react-icons/hi";
import './submit.scss';

function Botao () {
    return (
        <div className="d-grid gap-2" id="botao">
            <Button variant="primary" type="submit" >
                Entrar
            </Button>
        </div>
    );
}

function EsqueciSenha () {
    return (
        <a href="https://github.com/JairoMagno" id="senha">
            Esqueceu a senha?
            <span className="ps-2">
                <HiOutlineMail />
            </span>
        </a>
    );
}

export {Botao, EsqueciSenha};