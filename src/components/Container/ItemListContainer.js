import React, {Fragment, useEffect, useState} from 'react'
import './ItemListContainer.scss';
import {ProductCard} from '../ProductCard/ProductCard'
import cerveza1 from '../Images/cerveza1.jpg'
import cerveza2 from '../Images/cerveza2.jpg'
// import {stock} from '../../data/stock'
import {consultProducts} from '../../helpers/consultProducts'
import {ItemList} from '../ItemList/ItemList'
import {useParams} from 'react-router'
import {Loader} from '../Loader/Loader'
import {collection, getDocs, query, where} from 'firebase/firestore/lite'
import {db} from '../../firebase/config'

export const ItemListContainer = ({greeting}) => {

const [loading, setLoading] = useState(false)
const [products, setProducts] = useState([])

const {catId} = useParams()
console.log(catId)


useEffect(() => {
setLoading(true)
const productsRef = collection(db, 'products')
console.log(productsRef)

const quer = catId ? query(productsRef, where('cat', '==', catId)) : productsRef
console.log(quer)

getDocs(quer)
.then((collection)=> {
const items = collection.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
}))
setProducts(items)
console.log(items)

})
.finally(()=> {
    setLoading(false)
})
//   consultProducts()
//   .then((response) => {

//     if(!catId){
//      setProducts(response)
//     } else {
//         setProducts(response.filter( prod => prod.cat === catId))
//     }
//  })
//  .catch((error) => {
//  console.log(error)
//  })
//  .finally(() => {
//     setLoading(false)
//     })
}, [catId])

    return <div className = "ItemListContainer">
       
    {/* <h2>{greeting}</h2> */}
    <hr/>
{/* 
    <ProductCard img={cerveza1} name="Cerveza Corona"/>
    <ProductCard img={cerveza2} name="Cerveza Haywards"/>
     */}
    {
        loading
          ? <h2><Loader/></h2>
          : <Fragment>
          <ItemList products={products}/>
          </Fragment>
    }   
    </div>

}
