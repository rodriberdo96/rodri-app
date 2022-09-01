import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/Navbar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import Item from './components/Item/Item';

function App() {
  return (
    <div  >
    <NavBar />
    <ItemListContainer greeting="hola" />
    </div>
  );
}

export default App;
