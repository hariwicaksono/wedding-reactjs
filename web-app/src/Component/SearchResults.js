import React from 'react'
import {Card} from 'react-bootstrap'

const SearchResults = (props) => {
  const options = props.data.map(r => (

    <Card key={r.id}>
      <div class="row no-gutters">
      <div class="col-md-4">
        <Card.Img variant="top" src={'photos/'+r.foto} />
        </div>
    <div class="col-md-8">

    <Card.Body>
    <Card.Title><h1>{r.nama}</h1></Card.Title>
    <Card.Text>
     <h5>{r.ucapan}</h5>
    </Card.Text>
  
  </Card.Body>
      </div>
      
      </div>
  
  
</Card>
    
  ))
  return <div className="col-md-10 offset-1">{options}</div>
}

export default SearchResults