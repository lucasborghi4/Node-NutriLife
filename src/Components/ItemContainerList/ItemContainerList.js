import React, { useState } from 'react';
import "./ItemContainerList.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function MediaCard(props) {
  const [counter, setCounter] = useState(0);

  const handlerCounterUp = () => {
    setCounter(counter + 1);
  };

  const handlerCounterDown = () => {
    if (counter > 0) {
    setCounter(counter - 1);}
    else {
      setCounter(counter)
      alert("Contador no puede ser negativo")
    }

  };
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={props.imagen}
          alt={props.elemento}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.elemento}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.descripcion}
          </Typography>
          <p className="contador d-flex justify-content-center">
          {counter}
          </p>
          <div className="botones d-flex justify-content-evenly"><button type="button" className="boton btn btn-secondary btn-sm" onClick={handlerCounterDown}>-</button>
          <button type="button" className="boton btn btn-secondary btn-sm" onClick={handlerCounterUp}>+</button></div>
        </CardContent>
      </Card>
    );
  }
