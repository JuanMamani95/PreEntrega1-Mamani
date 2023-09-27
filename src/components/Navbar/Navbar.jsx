import { CartWidget } from '../CartWidget/CartWidget'
import { ItemLinkContainer } from '../ItemLinkContainer/ItemLinkContainer'
import './styles.css'

export const Navbar = () => {
    
    const links = ['INICIO', 'PRODUCTOS', 'LOCALES', 'CONTACTO']
    
    return (
        <div className='navbar'>
            <a href="#"><img src="/src/components/Navbar/img/logo.png" alt="logo" /></a>
            <ItemLinkContainer  router={links} />
            <CartWidget />            
        </div>
    )
}