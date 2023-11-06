import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Books from './components/Books';
import FooterWithLogo from './components/Footer';
import { useState } from 'react'
import ThemeContext from "./contexts/theme";  


function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [theme, setTheme] = useState("dark");

  return (
    <>
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <div className={`${theme} App`}>
    <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <Container>
      
        <Col><Welcome /></Col>
        <Row className="d-flex">        
          <Col>
             <Books searchQuery={searchQuery} />
          </Col>        
        </Row>      
    </Container>
    <FooterWithLogo />
    </div>
    </ThemeContext.Provider>
    
    </>
  );
}

export default App;
