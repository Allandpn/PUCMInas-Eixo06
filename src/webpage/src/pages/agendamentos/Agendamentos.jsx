import { Link } from "react-router-dom";

Link;

const Agendamentos = () => {
  return (
    <div>
      <h1>Agendamentos</h1>
      <Link to={`/agendamento/${1}`}>Detalhes</Link>
    </div>
  );
};

export default Agendamentos;
