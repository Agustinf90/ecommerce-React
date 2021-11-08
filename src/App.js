
import {NavBar} from './components/NavBAr/NavBar'
import {ItemListContainer} from './components/Container/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
function App() {
  return (
    <>
      <NavBar/>
      <Button>Click</Button>
      <ItemListContainer greeting="My Ecommerce"/>
       </>
  );
}

export default App;
