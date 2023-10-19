import './App.css';
import { Contacto } from './components/Contacto/Contacto';
import { Carrito } from './components/Carrito/Carrito';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/Context/CartContext';
import { Checkout } from './components/Checkout/Checkout';


function App () {
    return (
        <div>
            <CartProvider>
                <BrowserRouter>
                    <Navbar />
                    <main className='mainContainer'>
                        <Routes>
                            <Route path="/" element={<ItemListContainer />}/>
                            <Route path="/item/:id" element={<ItemDetailContainer />}/>
                            <Route path="/productos" element={<ItemListContainer />}/>
                            <Route path="/productos/:category" element={<ItemListContainer />}/>
                            <Route path="/contacto" element={<Contacto />}/>
                            <Route path="/carrito" element={<Carrito /> }/>
                            <Route path="/checkout" element={<Checkout /> }/>
                        </Routes>
                    </main>
                </BrowserRouter>
            </CartProvider>
        </div>
    );
} 

export default App;