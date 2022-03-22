import React from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from './home'
import Movie from './movies'

function Rotas(){
return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movie/:id" element={<Movie/>} />
    </Routes>
  </BrowserRouter>
)
}
export default Rotas;