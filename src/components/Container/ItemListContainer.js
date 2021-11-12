import './ItemListContainer.scss';
import {ProductCard} from '../ProductCard/ProductCard'
import cerveza1 from '../Images/cerveza1.jpg'
import cerveza2 from '../Images/cerveza2.jpg'



export const ItemListContainer = ({greeting}) => {
    return <div className ="ItemListContainer">
       
    <h2>{greeting}</h2>
    <hr/>
    <ProductCard img={cerveza1} name="Cerveza Corona"/>
    <ProductCard img={cerveza2} name="Cerveza Haywards"/>
    </div>
}
