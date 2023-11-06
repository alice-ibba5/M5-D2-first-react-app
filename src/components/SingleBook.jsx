import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap'

const SingleBook = ({ setSelected, selected, book }) => {
  

  return (
    <Container>
        <Row className="row-gap-1">
    
    <Card onClick={() => setSelected(book.asin)}
      style={{ border: selected === book.asin ? '3px solid red' : 'none' }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    </Row>
    </Container>
  );
}

export default SingleBook;