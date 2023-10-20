import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import "./carrito.css";



export const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
    <div className="carrito-container">
        <h1>Carrito</h1>

        {
            carrito.map((prod) => (
                <div className="item-carrito-container" key={prod.id}>
                    <br />
                    <h3 className="item-title-carrito">{prod.title}</h3>
                    <p>Precio Unitario: ${prod.price}</p>
                    <p>Precio Total: ${prod.price * prod.cantidad}</p>
                    <p>Cantidad: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button className="vaciar-carrito-button" onClick={handleVaciar}>Vaciar Carrito</button>
                <Link className="item-checkout" to="/checkout">Finalizar Compra</Link>
            </> :
            <h2>El carrito está vacío :(</h2>
            
        }
        
    </div>
    ) 
}

