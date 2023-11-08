import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <h2>Nada aqui para você!</h2>
      <p>
        <Link to="/">Retornar a página principal.</Link>
      </p>
    </div>
  );
}

export default NoMatch;