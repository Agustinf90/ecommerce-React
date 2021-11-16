import React, {Fragment, useEffect, useState} from 'react'
import './ItemListContainer.scss';
import {ProductCard} from '../ProductCard/ProductCard'
import cerveza1 from '../Images/cerveza1.jpg'
import cerveza2 from '../Images/cerveza2.jpg'
// import {stock} from '../../data/stock'
import {consultProducts} from '../../helpers/consultProducts'
import {ItemList} from '../ItemList/ItemList'


export const ItemListContainer = ({greeting}) => {

const [loading, setLoading] = useState(false)
const [products, setProducts] = useState([])


useEffect(() => {
setLoading(true)
  consultProducts()
  .then((response) => {
     setProducts(response)
 })
 .catch((error) => {
 console.log(error)
 })
 .finally(() => {
    setLoading(false)
    })
}, [])

    return <div className = "ItemListContainer">
       
    {/* <h2>{greeting}</h2> */}
    <hr/>
{/* 
    <ProductCard img={cerveza1} name="Cerveza Corona"/>
    <ProductCard img={cerveza2} name="Cerveza Haywards"/>
     */}
    {
        loading
          ? <h2>Cargando...</h2>
          : <Fragment>
          <ItemList products={products}/>
          </Fragment>
    }   
    </div>

}
