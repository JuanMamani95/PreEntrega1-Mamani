import { useForm } from "react-hook-form"

export const Contacto = () => {
    
    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

    
    
    return (
        <div>
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit(enviar)}>
                <input type="text" placeholder="Ingresa tu Nombre" {...register("nombre")} />
                <input type="text" placeholder="Ingresa tu Apellido" {...register("apellido")}/>
                <input type="email" placeholder="Ingresa tu E-Mail" {...register("email")}/>
                <input type="phone" placeholder="Ingresa tu Telefono" {...register("telefono")}/>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

