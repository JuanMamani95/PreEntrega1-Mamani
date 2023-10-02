import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App () {
    return (
        <div> 
            <BrowserRouter>


                <Navbar />

                <Routes>
                    <Route path="/" element={<ItemListContainer />}/>
                    <Route path="/item/:id" element={<ItemDetailContainer />}/>
                    <Route path="/productos" element={<ItemListContainer />}/>
                    <Route path="/productos/:category" element={<ItemListContainer />}/>
                </Routes>


            </BrowserRouter>
        </div>
    );
} 

export default App;