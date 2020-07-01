import React from 'react'
import {Container,Card, Row, Col} from 'react-bootstrap'

const SearchResults = (props) => {
  const options = props.data.map(r => (
 
    <Card className="shadow" key={r.id}>
      <Row className="no-gutters">
      <Col md="4">
        <Card.Img variant="top" src={'http://localhost/wedding-server/assets/images/photos/'+r.foto} />
      </Col>
      <Col md="8">
        <Card.Body>
        <Card.Title><h1 className="display-2">{r.nama}</h1></Card.Title>
        <hr className="mt-2 mb-3"/>
        <Card.Text>
        <em className="h3">{r.ucapan}</em>
        </Card.Text>
        </Card.Body>
      </Col>
      
      </Row>
  
  
</Card>
    
  ))
  return <Container>
    <h1 className="display-2 text-center" style={{fontWeight:'700'}}>Selamat Datang Bapak/Ibu</h1><hr className="mt-2 mb-3"/>{options}</Container>
}

export default SearchResults