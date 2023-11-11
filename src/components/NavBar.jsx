import { Navbar, Nav, Container, Form, Col, Row } from 'react-bootstrap'
import ThemeContext from "../contexts/theme"
import { useContext } from "react";
import { Moon } from 'react-bootstrap-icons';
import { Sun } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";

const NavBar = ({ searchQuery, setSearchQuery }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { dark } = useContext(ThemeContext);
  const navigate = useNavigate()
  const { genre } = useParams()

  return (
    <Navbar expand="lg" className="navbar sticky-top"
      variant={theme} data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => navigate(`/${genre}`)}>Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Row className="justify-content-center">
        <Col xs={6} md={9} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={6} md={3} className="text-center align-items-center">
        <button className="justify-content-center" onClick={() => setTheme(theme ? dark : "light")} >
            {theme ? (<Moon />) : (<Sun />)}
          </button>
        </Col>
      </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;