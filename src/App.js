import React from "react"
import './App.css';
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
    return(
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer/>} />
        </Routes>
        </BrowserRouter>
    </div>
    )
  }

export default App;