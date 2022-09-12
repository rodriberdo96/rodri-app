import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/Navbar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import Servicios from './components/Servicios/Servicios';
import Contacto from './components/Contacto/Contacto';



function App() {
  return (
    <div  >
      
      <BrowserRouter>

          <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path="/Nosotros" element={ <Nosotros/> }/>
            <Route path="/Servicios" element={ <Servicios/> }/>
            <Route path="/Contacto" element={ <Contacto/> }/>
            <Route path='/productos/:categoryid' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='*' element={ <Navigate to="/"/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
