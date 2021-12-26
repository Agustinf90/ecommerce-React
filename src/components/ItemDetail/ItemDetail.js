import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { useState, useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import './ItemDetail.scss'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

export const ItemDetail = ({id, name, img, desc, price, stock, cat, }) => {

    const {addToCart, isInCart} = useContext(CartContext)


    const [cant, setCant] = useState(0);

     
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }

    const handleAddCart = () => {
        if (cant > 0) { 
       addToCart({
           id,
           name,
           price,
           img,
           cant
       })

    }
    }


    return (
        <div className="itemDetail">
            
            <h1>{name}</h1>
            <img src= {img}/>
            <p>{desc}</p>
            <p>Precio:{price}</p>
           {
            !isInCart(id) 
            ? <ItemCount 
            max={stock}
            cant={cant} 
            setCant={setCant}
            onAdd={handleAddCart}
            />
            :
            <Link to="/cart" className="btn btn-success">Terminar Compra</Link>
        }
            
<Button variant="primary" onClick={back}>Volver</Button>
        </div>
    )
}
