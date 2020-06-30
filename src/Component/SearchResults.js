import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'

const SearchResults = (props) => {
  const options = props.data.map(r => (
 
    <Card className="shadow" key={r.id}>
      <div className="row no-gutters">
      <div className="col-md-4">
        <Card.Img variant="top" src={'http://localhost/wedding-server/assets/images/photos/'+r.foto} />
        </div>
    <div className="col-md-8">

    <Card.Body>
    <Card.Title><h1 className="display-2">{r.nama}</h1></Card.Title>
    <hr className="mt-2 mb-3"/>
    <Card.Text>
    <em className="h3">{r.ucapan}</em>
    </Card.Text>
  
  </Card.Body>
      </div>
      
      </div>
  
  
</Card>
    
  ))
  return <div className="col-md-10 offset-1">
    <h1 className="display-2 text-center">Selamat Datang Bapak/Ibu</h1><hr className="mt-2 mb-3"/>{options}</div>
}

export default SearchResults