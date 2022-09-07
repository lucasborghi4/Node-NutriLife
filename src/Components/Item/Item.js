import React from 'react';
import "./Item.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';



export default function Item({product}) {
    const {id,producto, descripcion, precio, image, stock, initial} = product
    return (
      <div className="box">
      <Card sx={{ maxWidth: 200}}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={producto}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {producto}
          </Typography>
          <Typography gutterBottom variant="h7" component="div" sx={{ height: 100}}>
          {descripcion}
          </Typography>
          <Link to={`/detail/${id}`}>
            <button>ver detalles</button>
          </Link>
          <Typography variant="body2" color="text.secondary">
          Precio : ${precio}
          </Typography>
          <Counter stock= {stock} initial= {initial}/>
        </CardContent>
      </Card>
      </div>
    );
  }
