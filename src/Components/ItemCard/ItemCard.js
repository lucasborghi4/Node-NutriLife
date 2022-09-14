import React, {useState} from 'react';
import "./ItemCard.css";
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';


export default function ItemCard({product}) {
    const {producto, descripcion, precio, image, stock, initial} = product

    const [counter, setCounter] = useState(0);
    console.log("el counter" + counter)

   
    const onSubmit = (e) => {
        e.preventDefault();
        console.log ("quisiste comprar " + counter + " " + producto)
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
      <Link to={`/cart`}><button className="btn btn-primary botoncito">Comprar Ahora</button></Link>
      <Link to={`/`}><button className="btn btn-primary botoncito">Volver atrás</button> </Link></form>
      </div>
    );
  }