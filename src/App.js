
import {NavBar} from './components/NavBAr/NavBar'
import {ItemListContainer} from './components/Container/ItemListContainer'
import { ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/CartView/CartView';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {CartProvider} from './context/CartContext'
import {Checkout} from './components/Checkout/Checkout'

function App() {


  return (
   <CartProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path= "/" element={<ItemListContainer/>}/>
        <Route path= "/productos/:catId" element={<ItemListContainer/>}/>
        <Route path= "/detail/:itemId" element={<ItemDetailContainer/>}/>
        <Route path= "/cart" element={<CartView/>}/>
        <Route path= "/checkout" element={<Checkout/>}/>
      </Routes>
      </BrowserRouter>
      </CartProvider>      
  );
}

export default App;
