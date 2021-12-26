import React from 'react'
import './itemList.scss';

import {Item} from '../Item/Item'


export const ItemList = ({products}) => {
    return (
        <div className="products">
            <hr/>
            
            {products.map((prod) => ( <Item key={prod.id} prod={prod}/>
            ))}
          
            </div>
    )
}
