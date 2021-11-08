import React from 'react'
import './CartWidget.scss';
import {BsFillCartCheckFill} from 'react-icons/bs'

export const CartWidget = () => {
    return (
        <div className="CartWidget">
           <BsFillCartCheckFill/> 
        </div>
    )
}
