import { Link } from 'react-router-dom';
import './item.css';

export const Item = ({ producto }) => {
  return (
    <div className="producto">
        <img src={producto.image} />
        <div>
          <h4>{producto.title}</h4>
          <p>Precio: ${producto.price}</p>
          <p>Categoria: {producto.category}</p>
          <Link className="ver-mas" to={`/item/${producto.id}`}>Ver mas</Link>
        </div>
    </div>
  )
}
