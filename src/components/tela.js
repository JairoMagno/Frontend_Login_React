//import Imagem from "./imagem";
import Formulario from "./formulario/formulario";
import { Card } from "react-bootstrap";
import "./tela.scss";

function Tela () {
    return (
        <main>
            <section>
                <Card border="light" style={{width: '25rem'}} className="shadow p-3 mb-5 bg-light-tertiary rounded">
                    <Formulario />
                </Card>
            </section>
        </main>
    )
}

export default Tela;
