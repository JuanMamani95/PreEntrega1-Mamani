import { useContext, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../Context/CartContext";


export const ItemDetail = ({ item }) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);

    const [cantidad, setCantidad] = useState (1);

    const restar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const sumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    return (
        <div className="container">
            <div className="producto-detalle">
                <img src={item.image} alt={item.title} />
                <div>
                    <h3 className="titulo">{item.title}</h3>
                    <p className="categoria">Categoria: {item.category}</p>
                    <p className="precio">${item.price}</p>
                    <ItemCount cantidad={cantidad} sumar={sumar} restar={restar} agregar={ () => {agregarAlCarrito(item, cantidad)} }/>
                </div>
            </div>
        </div>
    )
}
