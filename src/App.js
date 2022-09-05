import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import PagCarrito from './components/PagCarrito/PagCarrito';
import PagContact from './components/PagContact/PagContact';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route exact path='/servicios' element={<ItemListContainer/>}/>
            <Route path="/servicios/:tipoServicio" element={<ItemListContainer/>}/>
            <Route path="/detalle/:detalleServicio" element={<ItemDetailContainer/>}/>
            <Route path='/contacto' element={<PagContact/>}/>
            <Route path='/carrito' element={<PagCarrito/>}/>
            <Route path='*' element={<ItemListContainer />}/>
          </Routes>                      
      </div>
    </BrowserRouter>
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