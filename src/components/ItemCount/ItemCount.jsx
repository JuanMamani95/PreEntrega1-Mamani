import "./itemcount.css"

export const ItemCount = ({cantidad, sumar, restar, agregar}) => {

    return (
    <div>
        <div className="item-count-container">
            <button className="item-count" onClick={restar}>-</button>
            <p className="text-count">{cantidad}</p>
            <button className="item-count" onClick={sumar}>+</button>
        </div>
        <button className="add-count" onClick={agregar}>Agregar al Carrito</button>
    </div>
    )
}
