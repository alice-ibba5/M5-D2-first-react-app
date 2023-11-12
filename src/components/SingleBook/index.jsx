import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom";
import cn from "classnames";
import styles from "./styles.module.scss";

const SingleBook = ({ setSelected, selected, book, asin }) => {
  const navigate = useNavigate()
  const { genre } = useParams()

  return (
    <Container>
        <Row className="row-gap-2 d-flex">
    
    <Card onClick={() => setSelected(book.asin)}
      style={{ border: selected === book.asin ? '3px solid red' : 'none' }} className={cn ("flex-grow-1", styles.card)}>
      <Card.Img variant="top" src={book.img} className={styles.cardImage}/>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        
        <Button variant="outline-dark" onClick={() => navigate(`/${genre}/${book.asin}`)}>Details</Button>
      </Card.Body>
    </Card>
    
    </Row>
    </Container>
  );
}

export default SingleBook;