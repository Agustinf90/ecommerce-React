import React, {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import { formControl } from '../../helpers/formControl'
import { Navigate} from 'react-router-dom'
import {collection, writeBatch, getDoc, doc, updateDoc, addDoc, Timestamp, getDocs, query, where, documentId} from 'firebase/firestore/lite'
import {db} from '../../firebase/config'
import Swal from 'sweetalert2'

export const Checkout = () => {

    const {cart, totalPurchase, clearCart} = useContext(CartContext)

    const [values, setValues] = useState({
        name: '',
        lastName: '',
        email: '',
        emailConfirm: ''
    })
    
    const handleInputChange = (e) => {
    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formControl(values)) {return}

        const orden  = { buyer: {
            ...values
        },
        items: cart,
        total: totalPurchase(),
        date: Timestamp.fromDate(new Date())
    }
    const orderRef = collection(db, "orders")
    const prodsRef = collection(db, "products")
    
    const batch = writeBatch(db)

    const q = query(prodsRef, where(documentId(),'in', cart.map(el => el.id)))   
    
    const outOfStock = []
    const prods = await getDocs(q)

 
    prods.docs.forEach((doc) => {
        const itemToUpdate = cart.find((prod) => prod.id === doc.id)
        if (doc.data().stock >= itemToUpdate.cant){
            batch.update(doc.ref, {
            stock: doc.data().stock - itemToUpdate.cant
    })
}       else {
        outOfStock.push(itemToUpdate)
}
})
        if(outOfStock.length === 0) {
            addDoc(orderRef, orden)
              .then((res) => {
        batch.commit()
        Swal.fire({
            icon: 'success',
            title: 'order complete!',
            text: `Your order is: ${res.id}`
        })
        clearCart()
    })
            
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'there is no stock of the following products:',
                text: outOfStock.map(el => el.name).join(',')
            })
        }
    // cart.forEach((prod) => {
    //     const docRef = doc(prodsRef, prod.id)
    
    // getDoc(docRef)
    // .then((doc) => {
    //     updateDoc(doc.ref, {
    //         stock: doc.data().stock - prod.cant
    //     })
    // })
    // })
    
    
    
    
    
    console.log(orden)
}
    return (
        <>
        {cart.length === 0 && <Navigate to = "/"/>}
        <div>
            <h2>Purchase Summary</h2>
            <hr/>
            <form className="container m-5" onSubmit={handleSubmit}>
            <input 
            name="name"
            onChange={handleInputChange}
            value={values.name}
            className="form-control my-2"
            type="text"
            placeholder="name"
            />
            <input
            onChange={handleInputChange}
            value={values.lastName}
            name="lastName"
            className="form-control my-2"
            type="text"
            placeholder="lastName"
            />
            <input
            onChange={handleInputChange}
            value={values.email}
            name="email"
            className="form-control my-2"
            type="text"
            placeholder="email"
            />
            <input
            onChange={handleInputChange}
            value={values.emailConfirm}
            name="emailConfirm"
            className="form-control my-2"
            type="text"
            placeholder="confirm Email"/>
            {values.emailConfirm !== values.email && <p> emails do not match</p>}

            <button type="submit" btm-btn-danger>Send</button>
        </form> 
        </div>
        </>
    )
}
