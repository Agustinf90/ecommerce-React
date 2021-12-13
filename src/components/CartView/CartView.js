import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { CartItem } from './CartItem'
import {Link} from 'react-router-dom'

export const CartView = () => {
    
    const {cart, clearCart} = useContext(CartContext)

    return (
        <div>
           
            {
            cart.length > 0
            ? <>
             <h2>Cart</h2>
            <hr/>
            <section>
            {
                cart.map((prod) => (
                    <CartItem {...prod}/>))
            }
            </section>
            <hr/>
            <div>
                <button className="btn btn-danger" onClick={clearCart}>Clear Cart</button>
                <Link to="/checkout" className="btn btn-success">Finnish Purchase</Link>
            </div>
            </>
            : <>
            <h2>Not products in cart yet</h2>
            <Link to="/">Volver al inicio</Link> 
            </>
}
        </div>
    )
}
