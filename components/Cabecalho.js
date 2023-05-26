import React from 'react'
import { Container, Nav, Navbar, NavDropdown, NavLink, } from 'react-bootstrap'

function Cabecalho() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="../anime">Acadêmico</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="../anime">Cursos</Nav.Link>
            <Nav.Link href="../anime/generos">Disciplinas</Nav.Link>
            <Nav.Link href="../anime/generos">Alunos</Nav.Link>
            <Nav.Link href="../anime/generos">Professores</Nav.Link>
            <Nav.Link href="../anime/generos">Turmas</Nav.Link>
            <Nav.Link href="../anime/generos">Salas</Nav.Link>
            <Nav.Link href="../anime/generos">Semestres</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Cabecalho;