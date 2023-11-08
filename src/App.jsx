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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import BookDetails from './components/BookDetails';


function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [theme, setTheme] = useState("dark");

  return (
    <BrowserRouter>
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <div className={`${theme} App`}>
    <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <Container>
      
        <Col><Welcome /></Col>
        <Row className="d-flex">        
        <Routes>
          <Route path="/" element={<Books searchQuery={searchQuery} />} />
          <Route path="/details/:asin" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>     
        </Row>      
    </Container>
    <FooterWithLogo />
    </div>
    </ThemeContext.Provider>
    
    </BrowserRouter>
  );
}

export default App;
