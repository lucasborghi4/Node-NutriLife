import React, {useState, useContext} from 'react';
import "./ItemCard.css";
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';


export default function ItemCard({product}) {
    const [compra , setCompra] = useContext(CartContext);
    const {producto, descripcion, precio, image, stock, initial} = product

    const [counter, setCounter] = useState(0);
    console.log("el counter" + counter)

   
    const onSubmit = (e) => {
        e.preventDefault();
        const nuevoProducto = {producto, precio, counter}
        setCompra([...compra, nuevoProducto])
        console.log(compra)
    }

    const clear = (e) => {
        e.preventDefault();
        setCompra([])
        console.log(compra)
    }


    return (
        <div>
        <div className="card text-center">
            <div className="card-body">
                <img src={image} className="card-img-top tamano" alt={producto}></img>
                <h5 className="card-title">{producto}</h5>
                <p className="card-text">{descripcion}</p>
                <Counter counter= {counter} setCounter= {setCounter} initial={initial} stock={stock}/>
            </div>
            <div className="card-footer text-muted">
                El precio es de ${precio} por bolsa
            </div>
      </div>
      <form onSubmit={onSubmit}>
      <button className="btn btn-primary botoncito">Comprar Ahora</button>
      <Link to={`/`}><button className="btn btn-primary botoncito">Volver atrás</button> </Link></form>
      <form onSubmit = {clear}>
      <button className="btn btn-primary botoncito">Limpiar Carrito</button>
      </form>
      </div>
    );
  }