import React from 'react';
import './App.css';
import {NavBar} from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { CartContainer } from './components/CartContainer/CartContainer';
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
            <Route exact path='/services' element={<ItemListContainer />} />
            <Route path="/categoria/:TypeService" element={<ItemListContainer />} />
            <Route path="/item/:serviceId" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='*' element={<ItemListContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;