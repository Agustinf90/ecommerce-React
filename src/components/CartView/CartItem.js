import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import {BsFillTrashFill} from 'react-icons/bs'


export const CartItem = ({name, price, cant, id}) => {

const {removeCart} = useContext(CartContext)

    return (
        <div>
                    <h3>{name}</h3>
                    <p> Price: ${price}</p>
                    <p> Quantity: {cant}</p>
                    
                    <button className="btn btn-danger" onClick={() => {removeCart(id)}}><BsFillTrashFill/></button>
                
                
                </div>
    )
}
