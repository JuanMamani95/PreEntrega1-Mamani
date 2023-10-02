import { Item } from "./Item"
import { toCapital } from "../../helpers/pedirProductos";
import './item.css';



export const ItemList = ({ productos, titulo }) => {
    return (
        <div className="container">
            <h2 className="main-title"> {titulo} </h2>

            <div className="productos">
                {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
            </div>
        </div>
    )
}
