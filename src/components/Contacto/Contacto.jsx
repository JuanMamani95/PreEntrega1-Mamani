import { useForm } from "react-hook-form"
import "./contacto.css";

export const Contacto = () => {
    
    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

    
    
    return (
        <div className="container-form">
            <h1 className="title-form">Contacto</h1>
            <form className="form-contact" onSubmit={handleSubmit(enviar)}>
                <input className="item-form" type="text" placeholder="Ingresa tu Nombre" {...register("nombre")} />
                <input className="item-form" type="text" placeholder="Ingresa tu Apellido" {...register("apellido")}/>
                <input className="item-form" type="email" placeholder="Ingresa tu E-Mail" {...register("email")}/>
                <input className="item-form" type="phone" placeholder="Ingresa tu Telefono" {...register("telefono")}/>
                <textarea  className="item-form" cols="30" rows="10" placeholder="Escriba aqui su consulta"></textarea>

                <button type="submit" className="submit-button">Enviar</button>
            </form>
        </div>
    )
}

