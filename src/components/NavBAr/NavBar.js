import './NavBar.scss';
import {CartWidget} from '../CartWidget/CartWidget'

export const NavBar = () => {


    return <header className="NavBar">
       
    <h1>Logo</h1>
    <nav>
    <ul>
    <li>Enlace 1</li>
    <li>Enlace 2</li>
    <li>Enlace 3</li>
         </ul>
         <CartWidget/>
    </nav>
    </header>
}

