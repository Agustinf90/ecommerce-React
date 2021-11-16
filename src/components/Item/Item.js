import React from 'react'
import {Card, Button} from 'react-bootstrap'

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
    </Card.Text>
    <Button variant="primary">Comprar</Button>
  </Card.Body>
</Card>
        </div>
    )
}
