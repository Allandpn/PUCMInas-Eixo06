import { useParams, Link } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import { useFetch } from "../../hooks/useFetch";

export default function AgendamentoDetails() {
  const { id } = useParams();
  //console.log(id);
  const url = "https://localhost:5005/agendamentos/" + id;
  const { data: agendamento, loading, error } = useFetch(url);
  //console.log({ agendamento });
  return (
    <Container className="mt-4">
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando produto...</p>}
      {agendamento && (
        <Card>
          <Card.Body>
            <Card.Title>Detalhes do agendamento</Card.Title>
            <Card.Text>
              <br />
              <strong>Nome:</strong> {agendamento.nomePaciente}
              <br />
              <strong>Email:</strong> {agendamento.email}
              <br />
              <strong>Data:</strong> {agendamento.dataAtendimento}
              <br />
              <br />
              <strong>Email Medico:</strong>{" "}
              {agendamento.emailMedicoResponsavel}
              <br />
            </Card.Text>
            <Link to="/agendamentos">
              <Button variant="secondary">Voltar</Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}
