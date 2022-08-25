import React from 'react';
import "./ItemContainerList.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
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
        </CardContent>
      </Card>
    );
  }
