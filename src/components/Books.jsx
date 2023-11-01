import { useState } from 'react'
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
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

const Books = ({ searchQuery }) => {
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