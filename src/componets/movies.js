import React from "react";
import {useParams} from 'react-router-dom';

function Movie(){

    const {id} = useParams();
    let url = `https://api.themoviedb.org/3/tv/${id}?api_key=6415ac1fc5355bf2764376eb661c445e&language=pt-br`
    console.log(url)
  fetch(url)
  .then(r => r.json())
  .then((json)=>{
    document.getElementById('title').innerHTML = `${json.name}`
    document.getElementById('sinopse').innerHTML = `${json.overview}`
  document.getElementById('container-movie').style.backgroundImage = `url(http://image.tmdb.org/t/p/original${json.backdrop_path})`
  console.log(json)
  })
 
    return(
<div id="container-movie" >
  <div className="info-movie">
  <h1 id="title"></h1>
  <p id="sinopse"></p>
  </div>
</div>
    );
}
export default Movie;