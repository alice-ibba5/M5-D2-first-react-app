import Button from 'react-bootstrap/Button';
import CommentArea from './CommentArea'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useState } from 'react'
import { Card } from 'react-bootstrap'

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false)

  return (
    <Container>
        <Row className="row-gap-1">
    
    <Card onClick={() => setSelected(!selected)}
      style={{ border: selected ? '3px solid red' : 'none' }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    {selected && <CommentArea asin={book.asin} />}
    </Row>
    </Container>
  );
}

export default SingleBook;