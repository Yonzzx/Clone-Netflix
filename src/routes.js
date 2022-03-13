import React from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Home from './pages/home'
import Movie from "./pages/movies";

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