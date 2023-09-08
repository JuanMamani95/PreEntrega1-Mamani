import { CartWidget } from '../CartWidget/CartWidget'
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'
import './styles.css'

export const Navbar = () => {
    
    const links = ['INICIO', 'PRODUCTOS', 'LOCALES', 'CONTACTO']
    
    return (
        <div className='navbar'>
            <ItemListContainer  router={links} />
            <CartWidget />            
        </div>
    )
}