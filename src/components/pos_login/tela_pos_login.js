import DashBoard from "./dashboard/dashboard";
import SideBar from "./sidebar/sidebar";
import './tela_pos_login.scss';

function TelaPosLogin () {
    return (
        <main >
            <section className="app-container">
                <SideBar />
                <DashBoard />
            </section>
        </main>
    );
}

export default TelaPosLogin