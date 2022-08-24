import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/ItemCount/ItemCount';

function App() {
  const agregarCarrito = (productos)=>{
    console.log('Agregado al carrito', productos)
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer titulo="TEXTO PROVISIONAL"/>
        <ItemCount stock={5} initial={1} onAdd={agregarCarrito}/>
      </header>
    </div>
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