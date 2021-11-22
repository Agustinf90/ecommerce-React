import './NavBar.scss';
import {CartWidget} from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'
export const NavBar = () => {


    return <header className="NavBar">
    
       <Link to="/" className="logo"><h1>Logo</h1></Link> 
       <nav>
    <ul>
    
    <li><Link to="productos/rubia">Cervezas rubias</Link></li>
    <li><Link to="productos/roja">Cervezas rojas</Link></li>
    <li><Link to="productos/negra">Cervezas negras</Link></li>
    
         </ul>
        
    <ul><li> <Link to="cart" className="cart"><CartWidget /></Link></li> </ul>
    </nav>
    </header>
}

