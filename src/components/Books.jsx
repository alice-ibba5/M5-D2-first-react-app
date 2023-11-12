
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import { useContext, useState } from "react";
import SingleBook from '../components/SingleBook/index'
import { useNavigate, useParams } from "react-router-dom";
import GenreContext from '../contexts/genre';



const Books = ({ searchQuery }) => {
 
  const [selected, setSelected] = useState(false)

  
    const { genre } = useParams()
    const navigate = useNavigate()
    const { BooksByGenre } = useContext(GenreContext)
    const allTheBooks = BooksByGenre[genre]

  

  return (
    <Row>
      <Tabs
        activeKey={genre ? genre : ""}
        id="books"
        className="my-3"
        justify
        onSelect={(genre) => {navigate(`/${genre}`)}}>
        {Object.keys(BooksByGenre).map((genre, i) => (
          <Tab eventKey={genre} title={genre} key={i} />
        ))}
      </Tabs>
      
      <Col md={12}>
      <Row className="g-2 mt-3 row-gap-2">
        {allTheBooks?.filter((b) => b.title.toLowerCase().includes(searchQuery)).map((book) => {
            return (
              <Col xs={12} md={3} sm={4} key={book.asin} className="d-flex">
                <SingleBook 
                book={book} 
                selected={selected}
                setSelected={setSelected}                
                />
              </Col>
            )
          })}
      </Row>
      </Col>
      </Row>
  )
}

export default Books
