import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import NavBar from './NavBar';
import Welcome from './Welcome';
import Books from './Books';
import FooterWithLogo from './Footer';

function App() {
  return (
    <>
    <NavBar />
    <Container>
      <Row>
        <Col><Welcome /></Col>
        <Books />
      </Row>      
    </Container>
    <FooterWithLogo />
    
    </>
  );
}

export default App;
