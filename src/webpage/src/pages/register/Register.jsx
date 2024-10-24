import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import styles from "./Register.module.css";
import { useFetch } from "../../hooks/useFetch";

export default function Register() {
  const url = "https://localhost:5005/usuario/";
  const {
    data: usuario,
    httpConfig,
    loading,
    error: authError,
  } = useFetch(url);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nomeUsuario: "",
    password: "",
    confPassword: "",
    email: "",
    telefone: "0",
    tipo: 0,
    perfil: 0,
  });
  // const [nomeUsuario, setNomeUsuario] = useState("");
  // const [password, setPassword] = useState("");
  // const [confPassword, setConfPassword] = useState("");
  // const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  // const [telefone, setTelefone] = useState("");
  // const [tipo, setTipo] = useState("");
  // const [perfil, setPerfil] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = {
    //   nomeUsuario,
    //   password,
    //   confPassword,
    //   email,
    //   telefone: null,
    //   tipo: 0,
    //   perfil: 0,
    // };

    if (formData.password !== formData.confPassword) {
      setError("As senhas precisam ser iguais.");
      return;
    }

    const { confPassword, ...formDataFinal } = formData;

    console.log("Dados do Formulário: ", formDataFinal);
    const res = await httpConfig(formDataFinal, "POST");
    navigate("/agendamentos");
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   switch (name) {
  //     case "nomeUsuario":
  //       setNomeUsuario(value);
  //       break;
  //     case "email":
  //       setEmail(value);
  //       break;
  //     case "password":
  //       setPassword(value);
  //       break;
  //     case "confPassword":
  //       setConfPassword(value);
  //       break;
  //     case "telefone":
  //       setTelefone(value);
  //       break;
  //     case "tipo":
  //       setTipo(value);
  //       break;
  //     case "perfil":
  //       setPerfil(value);
  //     break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <Form onSubmit={handleSubmit} className={styles.registerForm}>
      <Form.Group className="mb-3" controlId="formNome">
        <Form.Label>Nome do Usuário</Form.Label>
        <Form.Control
          type="text"
          name="nomeUsuario"
          value={formData.nomeUsuario}
          onChange={handleChange}
          placeholder="Nome"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite o seu email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Digite a senha"
          required
        />
      </Form.Group>

      <Form.Group
        className={` mb-3 ${error ? "is-invalid" : ""}`}
        controlId="formConfPassword"
      >
        <Form.Label>Confirmação de Senha</Form.Label>
        <Form.Control
          type="confPassword"
          name="confPassword"
          value={formData.confPassword}
          onChange={handleChange}
          placeholder="Confirme a sua senha"
          required
        />
      </Form.Group>

      {/* 
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
      </Form.Group> */}

      <div className={styles.buttonContainer}>
        {!loading && (
          <Button variant="primary" type="submit">
            Registrar
          </Button>
        )}
        {loading && (
          <Button className="btn" disabled>
            Aguarde...
          </Button>
        )}
        <Button
          variant="secondary"
          className={styles.button_voltar}
          onClick={() => navigate("/login")} // Navega para a página de login
        >
          Voltar
        </Button>
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </Form>
  );
}
