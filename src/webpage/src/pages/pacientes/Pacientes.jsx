import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Pacientes = () => {
  const url = "https://localhost:5005/usuario/";
  const { data: pacientes, httpConfig, loading, error } = useFetch(url);

  const handleDelete = (id) => {
    httpConfig(id, "DELETE");
  };

  //console.log(pacientes);
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Pacientes</h1>

      {error && <p className="text-danger text-center">Ocorreu um erro...</p>}
      {loading && <p className="text-center">Carregando pacientes...</p>}

      <Row>
        {pacientes &&
          pacientes.map((paciente) => (
            <Col key={paciente.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <strong>Paciente:</strong> {paciente.nomeUsuario}
                  </Card.Text>
                  <Card.Text>
                    <strong>Email:</strong> {paciente.email}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Link to={`/paciente/${paciente.id}`}>
                      <Button variant="primary">Ver Detalhes</Button>
                    </Link>
                    <Button variant="warning">Editar</Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(paciente.id)}
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

export default Pacientes;
