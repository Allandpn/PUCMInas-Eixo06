import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";






export default function Register() {

  const [nomeUsuario, setNomeUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipo, setTipo] = useState("");
  const [perfil, setPerfil] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    e.preventDefault();
  }


  return (
   
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNome">
            <Form.Label>Nome do Usuario</Form.Label>
            <Form.Control
              type="text"
              name="nomeUsuario"
              value={nomeUsuario}
              onChange={handleChange}
              placeholder="nome"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formData">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Digite o email do paciente"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formHorario">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              name="telefone"
              value={telefone}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTipo">
            <Form.Label>Tipo</Form.Label>
            <Form.Select
              name="tipo" // Nome da propriedade no estado
              value={tipo} // Valor do estado
              onChange={handleChange} // Função que atualiza o estado
              required
            >
              <option value="">Selecione o Tipo</option>
              <option value="0">Profissional</option>
              <option value="1">Cliente</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPerfil">
            <Form.Label>Perfil</Form.Label>
            <Form.Select
              name="perfil" // Nome da propriedade no estado
              value={perfil} // Valor do estado
              onChange={handleChange} // Função que atualiza o estado
              required
            >
              <option value="">Selecione o Perfil</option>
              <option value="0">Administrador</option>
              <option value="1">Usuário</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Adicionar
          </Button>
        </Form>
 
  );
}