import "./navbar.css" ;
import logo from "./logo.png";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { CartWidget } from "../CartWidget/CartWidget";





const navbar = () => {
  return (
    <AppBar
    position="static"
    color="success"
    elevation={0}
    sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
  >
    <carWidget/>
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
          href="#"
          className="botones"
        >
          <div><CartWidget/></div>
        </Link>
      </nav>
    </Toolbar>
  </AppBar>
  )
}

export default navbar;