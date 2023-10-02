import { useEffect, useState } from "react";
import { pedirProductos } from "/src/helpers/pedirProductos";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";



export const ItemListContainer = () => {

        const [productos, setProductos] = useState([]);

        const [titulo, setTitulo] = useState("Productos");

        const categoria = useParams().category;

        useEffect(() => {
            pedirProductos()
                .then((res) => {
                    if (categoria) {
                        setProductos(res.filter((prod) => prod.category === categoria));
                        setTitulo(categoria);
                    } else { 
                    setProductos(res);
                    setTitulo("Productos")
                    }
                })
            }, [categoria])
    
    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    )
}







