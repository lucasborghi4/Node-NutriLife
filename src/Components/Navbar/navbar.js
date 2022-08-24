import "./navbar.css" ;
import logo from "./logo.png";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';


const navbar = () => {
  return (
    <AppBar
    position="static"
    color="success"
    elevation={0}
    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
  >
    <Toolbar sx={{ flexWrap: 'wrap' }}>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
      <div className="nav">
        <Link
          href="index.html">
      <img src={logo} alt="NutriLife" className="logo"></img>
      </Link>
      NutriLife
      </div>
      </Typography>
      <nav className="botones">
        <Link
          variant="button"
          color="#fafafa"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
        >
          <p className="botonesMenu">Productos</p>
        </Link>
        <Link
          variant="button"
          color="#fafafa"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
        >
          <p className="botonesMenu">Promociones</p>
        </Link>
        <Link
          variant="button"
          color="#fafafa"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
        >
          <p className="botonesMenu">Checkout</p>
        </Link>
      </nav>
    </Toolbar>
  </AppBar>
  )
}

export default navbar;