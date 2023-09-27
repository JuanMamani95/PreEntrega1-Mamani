export const Item = ({producto}) => {
    return (
        <div>
            <img src={producto.image} alt={producto.title} />
            <h2>{producto.title}</h2>
            <p>Precio: {producto.price}</p>
            <p>Categoria: {producto.category}</p>
            <a href="">VER MAS</a> 

        </div>
    )
}

export default Item;




