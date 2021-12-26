import React, {useState} from 'react'

export const ItemCount = ({max, cant, setCant, onAdd}) => {



    const handleRemove = () => {
        cant > 0 && setCant(cant - 1)
        console.log(cant)
    }
    const handleAdd = () => {
        cant < max && setCant(cant + 1)
        
    }

    return ( 
        <div>
         <button className={cant === 0 ? "btn btn-danger" : "btn btn-outline-primary"} 
         onClick={handleRemove}
         disabled={cant === 0}
         >-</button>
        <span className="mx-2">{cant}</span>
        <button className={cant === max ? "btn btn-danger" : "btn btn-outline-primary"}
        onClick={handleAdd}
        disabled={cant === max}
        >+</button>
        <br/>
        <button className={cant === 0 ? "btn btn-danger" : "btn btn-success"} 
        onClick={onAdd}
        disabled={cant === 0}
        >Agregar al Carrito</button>
        </div>
    )
}
