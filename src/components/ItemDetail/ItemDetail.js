import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router'
export const ItemDetail = ({id, name, img, desc, price, cat}) => {
    console.log(id, name, img, desc, price, cat)
    
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    return (
        <div>
            HOLA
            <h1>{name}</h1>
            {/* <Card key={item.id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.img} />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text> 
    {item.desc}
    Precio: ${item.price}   
    ${item.cat}
    </Card.Text>
    <Button variant="primary">SDGSDGDS</Button>
  </Card.Body>
</Card> */}
<Button variant="primary" onClick={back}>Volver</Button>
        </div>
    )
}
