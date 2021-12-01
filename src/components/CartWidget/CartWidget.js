import React, {useContext} from 'react'
import './CartWidget.scss';
import {BsFillCartCheckFill} from 'react-icons/bs'
import { CartContext } from '../../context/CartContext';
export const CartWidget = () => {

    const {totalCant} = useContext(CartContext)

    return (
        <div className="CartWidget">
           <BsFillCartCheckFill size="40"/>
           <span>{totalCant()}</span> 
        </div>
    )
}
