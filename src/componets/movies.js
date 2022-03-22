import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import Api from "../Api";

function Movie(){
  const [Movie, setMovie] = useState([])
    const {id} = useParams();
    useEffect(()=>{
   async function GetMovie(){
    let res = await Api.get(`tv/${id}?api_key=6415ac1fc5355bf2764376eb661c445e&language=pt-br`)
      setMovie(res.data)
    }
    GetMovie();
    },[])
 
    return(
<div id="container-movie" style={{
       backgroundImage: `url(http://image.tmdb.org/t/p/original${Movie.backdrop_path})`
}} >
  <div className="info-movie">
  <h1>{Movie.name}</h1>
  <p>{Movie.overview}</p>
  </div>
</div>
    );
}
export default Movie;