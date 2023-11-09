import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentArea from './CommentArea'
import GenreContext from '../contexts/genre';
import { useContext } from "react";




const BookDetails = () => {
  const { genre, id } = useParams()
  const { BooksByGenre } = useContext(GenreContext)
  
  const SelectedBook = BooksByGenre[genre].find((book) => book.asin === id)

  return (
    <Row className="d-flex">
      <Col md={6}>
        <Card className='my-5' style={{ width: '20rem' }}>
          <Card.Img variant="top" src={SelectedBook.img}  />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {SelectedBook.title}
            </Card.Title>
            <Card.Text>
            {SelectedBook.price} €
        </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      <Col md={6}>
        <CommentArea asin={id} />
        </Col>
    </Row>
  )
}

export default BookDetails
