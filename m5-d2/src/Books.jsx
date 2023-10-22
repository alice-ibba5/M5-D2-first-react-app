import data from "./fantasy.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Books() {
    return (
        <Container>
            <Row className="row-gap-1">
               {data.map((item) => (
                         
                <Col xs={3}>
                <img src={item.img} alt="" className="w-100 m-2" />
                </Col>
          
        ))}
           </Row>
      </Container>
    );
  }


export default Books;