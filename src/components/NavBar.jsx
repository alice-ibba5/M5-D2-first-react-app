import { Navbar, Nav, Container, Form, Col, Row } from 'react-bootstrap'

const NavBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Navbar expand="lg" className="navbar" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Row className="justify-content-center">
        <Col xs={12} md={9} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;