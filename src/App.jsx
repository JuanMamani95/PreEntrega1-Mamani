import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App () {
    return (
        <main>
            <BrowserRouter>   
                <Navbar />
                <ItemListContainer />
                <ItemDetailContainer itemId={2} />
            </BrowserRouter>
        </main>
    )
} 

export default App;