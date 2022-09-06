import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/Navbar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import Item from './components/Item/Item';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div  >
    <NavBar />
    <ItemDetailContainer idProducto={1} />

    <ItemListContainer greeting="hola" />
    </div>
  );
}

export default App;
