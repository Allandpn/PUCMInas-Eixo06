import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import AddAgendamentoModal from "./AgendamentoModal"; // Modal para Adicionar ou Editar

const Agendamentos = () => {
  const url = "https://localhost:5005/agendamentos/";
  const { data: agendamentos, httpConfig, loading, error } = useFetch(url);

  const [showModal, setShowModal] = useState(false); // Controle do modal
  const [editMode, setEditMode] = useState(false); // Controle do modo de edição
  const [currentAgendamento, setCurrentAgendamento] = useState(null); // Agendamento atual para edição

  // Função para abrir o modal no modo de adição
  const handleOpenModal = () => {
    setEditMode(false); // Define modo de adição
    setCurrentAgendamento(null); // Reseta o agendamento atual
    setShowModal(true); // Abre o modal
  };

  // Função para abrir o modal no modo de edição
  const handleOpenEditModal = (agendamento) => {
    setEditMode(true); // Define modo de edição
    setCurrentAgendamento(agendamento); // Define o agendamento a ser editado
    setShowModal(true); // Abre o modal
  };

  const handleCloseModal = () => setShowModal(false); // Fecha o modal

  // Função para adicionar ou editar um agendamento
  const handleAddOrEditAgendamento = (data) => {
    if (editMode) {
      httpConfig(data, "PUT"); // Faz requisição PUT para editar
    } else {
      httpConfig(data, "POST"); // Faz requisição POST para adicionar
    }
    handleCloseModal(); // Fecha o modal após adicionar/editar
  };

  const handleDelete = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Agendamentos</h1>

      <Button
        variant="primary"
        onClick={handleOpenModal} // Abre o modal no modo de adição
        className="mb-3"
      >
        Adicionar Agendamento
      </Button>

      {error && <p className="text-danger text-center">Ocorreu um erro...</p>}
      {loading && <p className="text-center">Carregando agendamento...</p>}

      <Row>
        {agendamentos &&
          agendamentos.map((agendamento) => (
            <Col key={agendamento.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{agendamento.nomePaciente}</Card.Title>
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
                    <Button
                      variant="warning"
                      onClick={() => handleOpenEditModal(agendamento)} // Abre o modal para edição
                    >
                      Editar
                    </Button>
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

      <AddAgendamentoModal
        show={showModal} // Passa o estado do modal
        handleClose={handleCloseModal} // Função para fechar o modal
        handleAddAgendamento={handleAddOrEditAgendamento} // Função para adicionar/editar agendamento
        agendamento={currentAgendamento} // Passa o agendamento atual para edição
      />
    </Container>
  );
};

export default Agendamentos;
