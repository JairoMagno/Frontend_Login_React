import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
//bootstrap config
import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'; /* O import do boostrap.min.css é essencia...*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Um <MemoryRouter> armazena suas localizações internamente em uma matriz. */}
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  </React.StrictMode>
);

reportWebVitals();
