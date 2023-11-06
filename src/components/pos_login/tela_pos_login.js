import DashBoard from "./dashboard/dashboard";
import Cadastro from "./cadastro/cadastro";
import SideBar from "./sidebar/sidebar";
import './tela_pos_login.scss';

function TelaPosLogin () {
    return (
        <main >
            <section className="app-container">
                <SideBar />
                <Cadastro />
            </section>
        </main>
    );
}

export default TelaPosLogin