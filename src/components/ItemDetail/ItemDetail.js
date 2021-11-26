import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { useState} from 'react'
import './ItemDetail.scss'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
export const ItemDetail = ({id, name, img, desc, price, stock, cat, }) => {


    const [cant, setCant] = useState(0);
    const [add, setAdd] = useState(false);
     
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }

    const handleAddCart = () => {
        if (cant > 0) { 
        console.log('item added', {
            id,
            name,
            price,
            cant
        })
        setAdd(true)
    }
    }


    return (
        <div className="itemDetail">
            
            <h1>{name}</h1>
            <img src= {img}/>
            <p>{desc}</p>
            <p>Precio:{price}</p>
           {
            !add 
            ? <ItemCount 
            max={stock}
            cant={cant} 
            setCant={setCant}
            onAdd={handleAddCart}
            />
            :
            <Link to="/cart" className="btn btn-success">Terminar Compra</Link>
        }
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
