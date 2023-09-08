import {BsCart3} from 'react-icons/bs'
import './styles.css'
import { Badge } from '@mui/material';

export const CartWidget = () => {
    return (
        <Badge badgeContent={4} color="secondary">
            <BsCart3 size={35}/>
        </Badge>
    )
}