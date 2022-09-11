import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CartContainer } from './components/CartContainer/CartContainer';
import PagContact from './components/PagContact/PagContact';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route exact path='/servicios' element={<ItemListContainer />} />
            <Route path="/categoria/:tipoServicio" element={<ItemListContainer />} />
            <Route path="/item/:detalleServicio" element={<ItemDetailContainer />} />
            <Route path='/contacto' element={<PagContact/>} />
            <Route path='/carrito' element={<CartContainer />} />
            <Route path='*' element={<ItemListContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
/*
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>*/