import {BsCart3} from 'react-icons/bs'
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';


export const CartWidget = () => {

    const { cantidadCarrito } = useContext(CartContext); 

    return (          
            <Link to="/carrito" className="menu-link">
                <Badge badgeContent={ cantidadCarrito() } color="secondary">
                <BsCart3 size={35}/>
                </Badge>
            </Link>
    )
}