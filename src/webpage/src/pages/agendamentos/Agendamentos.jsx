import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

Link;

const Agendamentos = () => {
  const url = "https://localhost:5005/agendamentos/";
  const { data: agendamentos, httpConfig, loading, error } = useFetch(url);

  const handleDelete = (id) => {
    httpConfig(id, "DELETE");
  };

  //console.log(agendamento);
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Agendamentos</h1>

      {error && <p className="text-danger text-center">Ocorreu um erro...</p>}
      {loading && <p className="text-center">Carregando agendamento...</p>}

      <Row>
        {agendamentos &&
          agendamentos.map((agendamento) => (
            <Col key={agendamento.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <strong>Paciente:</strong> {agendamento.nomePaciente}
                  </Card.Text>
                  <Card.Text>
                    <strong>Email:</strong> {agendamento.email}
                  </Card.Text>
                  <Card.Text>
                    <strong>Data:</strong> {agendamento.dataAtendimento}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Link to={`/agendamento/${agendamento.id}`}>
                      <Button variant="primary">Ver Detalhes</Button>
                    </Link>
                    <Button variant="warning">Editar</Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(agendamento.id)}
                    >
                      Excluir
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Agendamentos;
