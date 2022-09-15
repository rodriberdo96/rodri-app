    import Dropdown from 'react-bootstrap/Dropdown';
import DropdownContext from 'react-bootstrap/esm/DropdownContext';
    import {Link} from 'react-router-dom';
    import "./Categoria.scss"; 
function Category() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant='outline-transparent'    title="Dropdown" >Productos</Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item><Link to='/productos/laptop' className='catlink'>Laptop</Link></Dropdown.Item>
                <Dropdown.Item > <Link to='/productos/mouse' className='catlink'> Mouse </Link></Dropdown.Item>
                <Dropdown.Item > <Link to='/productos/monitor' className='catlink'> Monitor</Link></Dropdown.Item>
                <Dropdown.Item > <Link to='/productos/teclado' className='catlink'> Teclado </Link></Dropdown.Item>
                <Dropdown.Item > <Link to='/productos/impresora' className='catlink'> Impresora </Link></Dropdown.Item>
                <Dropdown.Item > <Link to='/productos/celular' className='catlink'> Celular </Link></Dropdown.Item>
                <Dropdown.Item > <Link to='/productos/tablet' className='catlink'> Tablet </Link></Dropdown.Item>
                <Dropdown.Item > <Link to='/productos/ram' className='catlink'> Memoria RAM </Link></Dropdown.Item>
                <Dropdown.Item > <Link to='/productos/hdd' className='catlink'> HDD </Link></Dropdown.Item>
                <Dropdown.Item > <Link to='/productos/placa' className='catlink'> Placas de video </Link></Dropdown.Item>
                <Dropdown.Item > <Link to='/productos/procesador' className='catlink'> Procesador </Link></Dropdown.Item>
                <Dropdown.Item > <Link to='/productos/fuente' className='catlink'> Fuente </Link></Dropdown.Item>
                <Dropdown.Item > <Link to='/productos/gabinete' className='catlink'> Gabinete </Link></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Category;