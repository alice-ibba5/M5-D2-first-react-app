import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Books from './components/Books';
import FooterWithLogo from './components/Footer';
import { useState } from 'react'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <>
    <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <Container>
      <Row>
        <Col><Welcome /></Col>
        <Books searchQuery={searchQuery} />
      </Row>      
    </Container>
    <FooterWithLogo />
    
    </>
  );
}

export default App;
