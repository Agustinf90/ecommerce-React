import React from 'react'
import { useState } from 'react'

export const Form = () => {

const [values, setValues] = useState({
    name: '',
    lastName: '',
    email: ''
})

const handleInputChange = (e) => {
setValues({
    ...values,
    [e.target.name]: e.target.value
})
}

const handleSubmit = (e) => {
e.preventDefault()
console.log(values)
}

    return (
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
            <button type="submit" btm-btn-danger>Enviar</button>
        </form>
    )
}

