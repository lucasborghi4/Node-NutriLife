import React from 'react';
import "./ItemCard.css";
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';

export default function ItemCard({product}) {
    const {producto, descripcion, precio, image, stock, initial} = product
    return (
        <div>
        <div className="card text-center">
            <div className="card-body">
                <img src={image} className="card-img-top tamano" alt={producto}></img>
                <h5 className="card-title">{producto}</h5>
                <p className="card-text">{descripcion}</p>
                <Counter stock= {stock} initial= {initial}/>
            </div>
            <div className="card-footer text-muted">
                El precio es de {precio} por bolsa
            </div>
      </div>
      <Link to={`/`}><div className="btn btn-primary botoncito">Volver atrás</div> </Link>
      </div>
    );
  }