import React from "react"
import './App.css';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/navbar";



const App = () => {
    return(
      <div>
        <Navbar/>
        <div className="tarjetas">
        <ItemListContainer/>
        </div>
    </div>
    )
  }

export default App;