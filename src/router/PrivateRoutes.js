import NavBar  from '../components/Navbar/NavBar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from '../components/Nosotros/Nosotros';
import Contacto from '../components/Contacto/Contacto';
import Cart from '../components/Cart/Cart';
import Servicios from '../components/Servicios/Servicios';
import { Routes, Route, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    return (
        <>
        <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path="/Nosotros" element={ <Nosotros/> }/>
            <Route path="/Servicios" element={ <Servicios/> }/>
            <Route path="/Contacto" element={ <Contacto/> }/>
            <Route path="/Cart" element={ <Cart/> }/>
            <Route path='/productos/:categoryid' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='*' element={ <Navigate to="/"/>} />
          </Routes>
        </>
    )
}

export default PrivateRoutes