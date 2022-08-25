import React from "react"
import './App.css';
import Navbar from "./Components/Navbar/navbar";
import Fotoarandano from "./Components/ItemContainerList/arandanos.jpg";
import Fotoframbuesa from "./Components/ItemContainerList/frambuesa.jpeg";
import Fotomora from "./Components/ItemContainerList/mora.webp";
import MediaCard from "./Components/ItemContainerList/ItemContainerList";


class App extends React.Component{
  render() {
    return(
      <div>
        <Navbar/>
        <div className="tarjetas">
        <MediaCard 
        imagen={Fotoarandano}
        elemento="Arándanos"
        descripcion="Arándanos congelados en bolsa de 1kg"/>
        <MediaCard 
        imagen={Fotoframbuesa}
        elemento="Frambuesas"
        descripcion="Frambuesa congeladas en bolsa de 0.5kg"/>
        <MediaCard 
        imagen={Fotomora}
        elemento="Moras"
        descripcion="Moras congeladas en bolsa de 1kg"/>
        </div>
    </div>
    )
  }

}

export default App;