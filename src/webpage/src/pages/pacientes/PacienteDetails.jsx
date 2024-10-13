import { useParams, Link } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import { useFetch } from "../../hooks/useFetch";

export default function PacienteDetails() {
  const { id } = useParams();
  //console.log(id);
  const url = "https://localhost:5005/usuario/" + id;
  const { data: paciente, loading, error } = useFetch(url);
  //console.log({ paciente });
  return (
    <Container className="mt-4">
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando produto...</p>}
      {paciente && (
        <Card>
          <Card.Body>
            <Card.Title>Detalhes do Paciente</Card.Title>
            <Card.Text>
              <br />
              <strong>Nome:</strong> {paciente.nomeUsuario}
              <br />
              <strong>Email:</strong> {paciente.email}
              <br />
              <strong>Telefone:</strong> {paciente.telefone}
              <br />
              <strong>Tipo:</strong> {paciente.tipo === 1 ? "Ativo" : "Inativo"}
              <br />
              <strong>Perfil:</strong>{" "}
              {paciente.perfil === 0 ? "Admin" : "Usuário"}
            </Card.Text>
            <Link to="/pacientes">
              <Button variant="secondary">Voltar</Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}
