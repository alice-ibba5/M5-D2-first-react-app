import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentArea from './CommentArea'
import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json'
import scifi from '../data/scifi.json'



const BookDetails = () => {
  const { genre: genereParam } = useParams()

  const BooksByGenre = {
    fantasy,
    history,
    horror,
    romance,
    scifi,
  };
  
  const params = useParams()
  const allTheBooks = BooksByGenre[genereParam];
  
  const foundBook = allTheBooks.find((book) => book.asin === params.asin)

  return (
    <Row className="justify-content-center">
      <Col md={8}>
        <Card>
          <Card.Img variant="top" src={foundBook.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {foundBook.title}
            </Card.Title>
          </Card.Body>
        </Card>
        <CommentArea asin={params.asin} />
      </Col>
    </Row>
  )
}

export default BookDetails
