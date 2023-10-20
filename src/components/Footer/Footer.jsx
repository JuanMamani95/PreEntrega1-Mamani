import { Link } from "react-router-dom"
import "./footer.css";


export const Footer = () => {
    return (
        <footer className="pie">
            <div className="text-container">
                <div className="texto">        
                <h1>SEGUINOS</h1>        
                </div>
            </div>
            <div className="logos">           
                <Link to="https://es-la.facebook.com/" target="_blank">
                    <img src="/src/data/img/facebook.png" alt="facebook" /></Link>
                <Link to="https://www.instagram.com/" target="_blank">
                    <img src="/src/data/img/instagram.png" alt="instagram" /></Link>
                <Link to="https://twitter.com/" target="_blank">
                    <img src="/src/data/img/tweter.png" alt="tweter" /></Link>
                <Link to="https://www.snapchat.com/es-ES" target="_blank">
                    <img src="/src/data/img/snapchat.png" alt="snapchat" /></Link>  
            </div>
            <div className="derechos">
                <h1>
                All right reserved
                </h1>
                <img src="/src/data/img/copyright.png" alt="copyright" />
                <h1>
                2022. From <b>Juan Mamani</b>
                </h1>
            </div>
    </footer>
    )
}
