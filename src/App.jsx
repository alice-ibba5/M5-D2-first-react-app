import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.scss';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Books from './components/Books';
import FooterWithLogo from './components/Footer';
import { useState } from 'react'
import ThemeContext from "./contexts/theme";  
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import BookDetails from './components/BookDetails';
import fantasy from '../src/data/fantasy.json'
import history from '../src/data/history.json'
import horror from '../src/data/horror.json'
import romance from '../src/data/romance.json'
import scifi from '../src/data/scifi.json'
import GenreContext from '../src/contexts/genre'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [theme, setTheme] = useState("dark");

  const BooksByGenre = {
    fantasy,
    history,
    horror,
    romance,
    scifi,
  };

  return (
    
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <div className={`${theme} App`}>
    <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <GenreContext.Provider value={{BooksByGenre}}>
    <Container>
      
        <Col><Welcome /></Col>
        <Row className="d-flex">        
        <Routes>
          <Route path="/" element={<Books searchQuery={searchQuery} />} />
          <Route path="/:genre" element={<Books searchQuery={searchQuery} />} />
          <Route path="/:genre/:id" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>     
        </Row>      
        <ToastContainer 
           position="bottom-right"
           autoClose={5000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
           theme="dark" />
    </Container>
    </GenreContext.Provider>
    <FooterWithLogo />
    </div>
    </ThemeContext.Provider>
    
   
  );
}

export default App;
