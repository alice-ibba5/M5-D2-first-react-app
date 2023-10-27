import { useState } from 'react'
import { Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap";
import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json'
import scifi from '../data/scifi.json'
import SingleBook from './SingleBook'

const BooksByGenre = {
  fantasy,
  history,
  horror,
  romance,
  scifi,
};

const Books = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState("fantasy");

  const allTheBooks = BooksByGenre[selectedGenre];

  

  return (
    <Container>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="my-3"
        justify
        onSelect={(genre) => setSelectedGenre(genre)}>
        {Object.keys(BooksByGenre).map((genre) => (
          <Tab eventKey={genre} title={genre} />
        ))}
      </Tabs>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="g-2 mt-3">
        {allTheBooks
          .filter((b) => b.title.toLowerCase().includes(searchQuery))
          .map((book) => {
            return (
              <Col xs={12} md={3} key={book.asin}>
                <SingleBook book={book} />
              </Col>
            )
          })}
      </Row>
      </Container>
  )
}

export default Books
