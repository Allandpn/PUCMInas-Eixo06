import { Link, NavLink } from "react-router-dom";
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
        className={`${styles.navbar_link}`}
      >
        <Container>
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.navbar_link} ${isActive ? styles.active : ""}`.trim()
              }
            >
              Home
            </NavLink>
            <NavLink to="/login" className={styles.navbar_link}>
              Login
            </NavLink>
            <NavLink to="/dashboard" className={styles.navbar_link}>
              Dashboard
            </NavLink>
            <NavLink to="/agendamentos" className={styles.navbar_link}>
              Agendamentos
            </NavLink>
            <NavLink to="/pacientes" className={styles.navbar_link}>
              Pacientes
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
