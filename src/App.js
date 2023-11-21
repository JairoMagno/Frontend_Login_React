import { Routes, Route } from 'react-router-dom';
import Layout from './components/pos_login/layout/layout';
import DashBoard from './components/pos_login/dashboard/dashboard';
import Cadastro from './components/pos_login/cadastro/cadastro';
import NoMatch from './components/nomatch';
import Registro from './components/pos_login/registros/registro';
import Tela from './components/login/tela';
import './App.scss';

function App() {
  return (
    <body>
      <main >
        <section className="app-container">
          {/* As rotas se aninham uma dentro da outra. Caminhos de rota aninhados são construídos sobre
          caminhos de rota 
          pai e elementos de rota aninhados são renderizados dentro
          elementos de rota pai. Veja a nota sobre <Outlet> abaixo. */}
          <Routes>
            <Route path='/'  element={ <Layout />}>
                <Route index element={ <DashBoard /> } />
                <Route path='cadastro'  element={ <Cadastro />} />
                <Route path='registro'  element={ <Registro />} />
                <Route path='login'     element={ <Tela />} />

                {/* Usar path="*" significa "combinar com qualquer coisa", então esta rota
                age como um catch-all para URLs que não temos explícito
                rotas para. */}
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes>
        </section>
        </main>
  </body>
  );
}

export default App;
