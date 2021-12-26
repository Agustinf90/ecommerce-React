import React from 'react'
import {useState, useEffect} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'

import {useParams} from 'react-router-dom'
import {Loader} from '../Loader/Loader'
import {doc, getDoc} from 'firebase/firestore/lite'
import {db} from '../../firebase/config'

export const ItemDetailContainer = () => {

const[item, setItem] = useState()
const[loading, setLoading] = useState(false)

const {itemId} = useParams()
console.log(itemId)


useEffect(()=> {
 setLoading(true)

 const docRef = doc(db, 'products', itemId)
 getDoc(docRef)
 .then((doc) =>
 {
     setItem({
        id: doc.id, 
        ...doc.data()})
 })
 .finally(() => {
     setLoading(false)
 })

}, [])
console.log(item)
    return (
        <div>
             
            {
               
            loading
            ? <h2><Loader/></h2>
            : <ItemDetail {...item}/> 
        }
        </div>
    )
}

