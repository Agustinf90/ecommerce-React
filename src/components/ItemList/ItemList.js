import React from 'react'
import './itemList.scss';
import {Container, Row} from 'react-bootstrap'
import {Item} from '../Item/Item'


export const ItemList = ({products}) => {
    return (
        <div className="products">
            <h2>Productos</h2>
            <hr/>
            
            {products.map((prod) => ( <Item key={prod.id} prod={prod}/>
            ))}
          
            </div>
    )
}
