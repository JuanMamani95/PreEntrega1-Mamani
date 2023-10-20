import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import "./checkout.css";


export const Checkout = () => {
    
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
            setPedidoId(doc.id);
            vaciarCarrito();
            })
    }

    if (pedidoId) {
        return (
            <div className="carrito-container">
                <h1>Muchas Gracias por su Compra</h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }
    
    return (
        <div className="container-check">
            <h1 className="title-check">Finalizar Compra</h1>
            <form className="form-check" onSubmit={handleSubmit(comprar)}>
                <input className="item-check" type="text" placeholder="Ingresa tu Nombre" {...register("nombre")} />
                <input className="item-check" type="text" placeholder="Ingresa tu Apellido" {...register("apellido")}/>
                <input className="item-check" type="email" placeholder="Ingresa tu E-Mail" {...register("email")}/>
                <input className="item-check" type="phone" placeholder="Ingresa tu Telefono" {...register("telefono")}/>
                <input className="item-check" type="text" placeholder="Ingresa tu Direccion" {...register("direccion")}/>

                <button type="submit" className="submit-check">Comprar</button>
            </form>
        </div>
    )
}
