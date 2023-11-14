import { Card, Col, Row } from 'react-bootstrap'
import { useParams, useNavigate } from "react-router-dom";
import CommentArea from '../CommentArea'
import GenreContext from '../../contexts/genre';
import { useContext, useCallback, useEffect } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { Bearer } from '../../Bearer';

export default function BookDetails () {
  const { genre, id } = useParams()
  const { BooksByGenre } = useContext(GenreContext)
  const navigate = useNavigate();
   
  const SelectedBook = BooksByGenre[genre].find((book) => book.asin === id)

  const getAllComments = useCallback(() => {
   
    fetch(`https://striveschool-api.herokuapp.com/api/books/${id}/comments/`, {
      method: 'GET',
      headers: {
        Authorization: Bearer,
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
        <Card className={cn ("my-5", styles.card)} style={{ width: '20rem' }}>
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