

export const ItemDetail = (item) => {
    return (
        <div>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>Categoria: {item.category}</p>
            <p>Precio: {item.price}</p>
        </div>
    )
}
export default ItemDetail;