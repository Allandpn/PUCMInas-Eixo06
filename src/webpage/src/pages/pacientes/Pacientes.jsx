import { Link } from "react-router-dom";

const Pacientes = () => {
  return (
    <div>
      <h1>Pacientes</h1>
      <Link to={`/paciente/${1}`}>Detalhes</Link>
    </div>
  );
};

export default Pacientes;
