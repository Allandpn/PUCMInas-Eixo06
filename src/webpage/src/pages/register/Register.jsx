import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./Register.module.css"; 

export default function Register() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipo, setTipo] = useState("");
  const [perfil, setPerfil] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      nomeUsuario,
      password,
      email,
      telefone,
      tipo,
      perfil,
    };
    console.log("Dados do Formulário: ", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "nomeUsuario":
        setNomeUsuario(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "telefone":
        setTelefone(value);
        break;
      case "tipo":
        setTipo(value);
        break;
      case "perfil":
        setPerfil(value);
        break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.registerForm}>
      <Form.Group className="mb-3" controlId="formNome">
        <Form.Label>Nome do Usuário</Form.Label>
        <Form.Control
          type="text"
          name="nomeUsuario"
          value={nomeUsuario}
          onChange={handleChange}
          placeholder="Nome"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Digite a senha"
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
          placeholder="Digite o email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTelefone">
        <Form.Label>Telefone</Form.Label>
        <Form.Control
          type="text"
          name="telefone"
          value={telefone}
          onChange={handleChange}
          placeholder="Digite o telefone"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTipo">
        <Form.Label>Tipo</Form.Label>
        <Form.Select
          name="tipo"
          value={tipo}
          onChange={handleChange}
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
          name="perfil"
          value={perfil}
          onChange={handleChange}
          required
        >
          <option value="">Selecione o Perfil</option>
          <option value="0">Administrador</option>
          <option value="1">Usuário</option>
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Registrar
      </Button>
    </Form>
  );
}
