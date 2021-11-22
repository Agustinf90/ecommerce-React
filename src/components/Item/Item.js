import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export const Item = ({prod}) => {
    return (
        <div>
            <Card key={prod.id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={prod.img} />
  <Card.Body>
    <Card.Title>{prod.name}</Card.Title>
    <Card.Text> 
    {prod.desc}
    Precio: ${prod.price}   
    ${prod.cat}
    </Card.Text>
    <Link to={`/detail/${prod.id}`}>VER MAS</Link>
  </Card.Body>
</Card>
        </div>
    )
}
