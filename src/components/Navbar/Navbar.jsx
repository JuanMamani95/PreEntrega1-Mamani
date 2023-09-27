import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import { ItemLinkContainer } from '../ItemLinkContainer/ItemLinkContainer'
import './styles.css'

export const Navbar = () => {
    
    const links = ['INICIO', 'PRODUCTOS', 'LOCALES', 'CONTACTO']
    
    return (
        <div className='navbar'>
            <Link to="/"><img src="/src/components/Navbar/img/logo.png" alt="logo" /></Link>
            <ItemLinkContainer  router={links} />
            <CartWidget />            
        </div>
    )
}