import React, {createContext, useState} from 'react';


export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

console.log(cart)

const addToCart = (item) => {
  setCart( [...cart, item])
}

const removeCart = (id) => {
  setCart (cart.filter(prod => prod.id !== id))
}

const clearCart = () => {
  setCart ([])
}

const isInCart = (id) => {
  return cart.some( prod => prod.id === id)
}

const totalCant = () => {
  return cart.reduce((acc, prod) => acc + prod.cant, 0)
}

const totalPurchase = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.cant, 0)
}

return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeCart,
      clearCart,
      isInCart,
      totalCant,
      totalPurchase
    }}>
        {children}
        </CartContext.Provider>
)
}