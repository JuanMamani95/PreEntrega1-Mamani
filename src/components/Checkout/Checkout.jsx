import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


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
            <div>
                <h1>Muchas Gracias por su Compra</h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }
    
    return (
        <div>
            <h1>Finalizar Compra</h1>
            <form onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingresa tu Nombre" {...register("nombre")} />
                <input type="text" placeholder="Ingresa tu Apellido" {...register("apellido")}/>
                <input type="email" placeholder="Ingresa tu E-Mail" {...register("email")}/>
                <input type="phone" placeholder="Ingresa tu Telefono" {...register("telefono")}/>

                <button type="submit">Comprar</button>
            </form>
        </div>
    )
}
