

export const ItemCount = ({cantidad, sumar, restar, agregar}) => {

    return (
    <div>
        <button onClick={restar}>-</button>
        <p>{cantidad}</p>
        <button onClick={sumar}>+</button>
        <button onClick={agregar}>Agregar al Carrito</button>
    </div>
    
    )
}
