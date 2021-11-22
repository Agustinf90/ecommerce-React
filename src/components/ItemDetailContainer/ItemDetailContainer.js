import React from 'react'
import {useState, useEffect} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { consultProducts } from '../../helpers/consultProducts'
import {useParams} from 'react-router-dom'

export const ItemDetailContainer = () => {

const[item, setItem] = useState()
const[loading, setLoading] = useState(false)

const {itemId} = useParams()


useEffect(()=> {
 setLoading(true)
 consultProducts()
 .then( resp=> {
     setItem( resp.find(prod => prod.id === Number(itemId)))
     console.log(item)
 })
 .finally(()=>{
     setLoading(false)
 })
}, [])
console.log(item)
    return (
        <div>
             
            {
               
            loading
            ? <h2>Cargando...</h2>
            : <ItemDetail {...item}/> 
        }
        </div>
    )
}

