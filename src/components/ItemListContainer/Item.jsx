import { Link } from "react-router-dom";

export const Item = ({producto}) => {
    return (
        <div>
            <img src={producto.image} alt={producto.title} />
            <h2>{producto.title}</h2>
            <p>Precio: {producto.price}</p>
            <p>Categoria: {producto.category}</p>
            <Link to={`/item/${producto.id}`}>VER MAS</Link> 

        </div>
    )
}

export default Item;




