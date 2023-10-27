import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Books from './components/Books';
import FooterWithLogo from './components/Footer';

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
