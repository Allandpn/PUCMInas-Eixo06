import { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './login.module.css'; // Importação do CSS

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || senha === "") {
      setError("Por favor, preencha todos os campos.");
    } else {
      console.log("Email:", email);
      console.log("Senha:", senha);
    }
  };

  return (
    <Container className="login-container mt-4">
      <Card className="login-card">
        <Card.Body>
          <Card.Title className="login-title">Login</Card.Title>
          {error && <p className="text-danger login-error">{error}</p>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label className="login-label">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formSenha">
              <Form.Label className="login-label">Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="login-button">
              Entrar
            </Button>
          </Form>
          <p className="mt-2">
            Não tem uma conta? <Link to="/registrar">Registre-se aqui</Link>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}
