import { Card, Col, Row } from 'react-bootstrap'
import { useParams, useNavigate } from "react-router-dom";
import CommentArea from './CommentArea'
import GenreContext from '../contexts/genre';
import { useContext, useCallback, useEffect } from "react";

export default function BookDetails () {
  const { genre, id } = useParams()
  const { BooksByGenre } = useContext(GenreContext)
  const navigate = useNavigate();
   
  const SelectedBook = BooksByGenre[genre].find((book) => book.asin === id)

  const getAllComments = useCallback(() => {
   
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
      method: 'GET',
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3YTMxOWU3NDZhMDAwMTQ4MTQzMjUiLCJpYXQiOjE2OTg2Nzg3MTEsImV4cCI6MTY5OTg4ODMxMX0.3N1a0TPRxchA1e5X9r5YkLcwsWGNk7Z8R6n4NYrD53k",
      },
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
        }
      })
      
      .catch(() => alert("oh oh"))
      
  }, [id]);

  useEffect(() => {
    getAllComments();
  }, [getAllComments]);

  if (!SelectedBook) {
    navigate("/404");
  } else {

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
        <CommentArea asin={id} getAllComments={getAllComments} />
        </Col>
    </Row>
  );
}

}