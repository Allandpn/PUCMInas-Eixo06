import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Modal, Form } from "react-bootstrap";
// padrao para importar arquivo css
import styles from "./Navbar.module.css";

const Navbarr = () => {
  return (
    <div>
      <Navbar
        bg="primary"
        variant="light"
        expand="lg"
        fixed="top"
        //padrao para definir classe css
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" className={styles.navbar_link}>
              Home
            </Link>
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/login" className={styles.navbar_link}>
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/dashboard" className={styles.navbar_link}>
                Dashboard
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/agendamentos" className={styles.navbar_link}>
                Agendamentos
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/pacientes" className={styles.navbar_link}>
                Pacientes
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
