import React, {useState} from 'react'
import{Button} from 'react-bootstrap'
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
{/* 
// export const ItemCount = ({stock}) => {
//     const [counter, setCounter] = useState(0);
    
//     const increment = () => {
//        if (stock>counter) {setCounter(counter+1);
//        }
//        else {
//        alert("No hay más stock")    
//        } 
       
//     }

//     const decrement = () => {
//        if(counter>0){
//         setCounter(counter-1)    
//        }
//        else {
//            alert("no se puede disminuir más")
//        }
//     }
//     const answer = () => {
//         if(counter>0){
//         alert(`agregaste ${counter} de este producto!`)
//     }
//     else {
//         alert("No agregaste ningún producto!")
//     }
// }

//     return ( 
//         <div>
//             <h2>{counter}</h2>
//             <div>
//             <Button variant="success" onClick={increment}>+</Button>
//             <Button variant="danger" onClick={decrement}>-</Button>
//             </div>
//             <Button variant="primary" size="lg" onClick={answer}>
//       Agregar al Carrito
//     </Button>
//         </div>
//     )
// } */}