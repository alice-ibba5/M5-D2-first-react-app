import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SingleBook = ({ setSelected, selected, book }) => {
  const navigate = useNavigate()

  return (
    <Container>
        <Row className="row-gap-1">
    
    <Card onClick={() => setSelected(book.asin)}
      style={{ border: selected === book.asin ? '3px solid red' : 'none' }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        
        <Button variant="outline-dark" onClick={() => navigate(`/details/${book.asin}`)}>Details</Button>
      </Card.Body>
    </Card>
    
    </Row>
    </Container>
  );
}

export default SingleBook;