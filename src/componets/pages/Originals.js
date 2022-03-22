import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import api from '../../Api';

function Originals(){
const [Original, setOriginal] = useState([]);
const [scrollx, setscrollx] = useState(-400)
  useEffect(()=>{
  async function GetOriginals(){
    let res = await  api.get('discover/tv?api_key=6415ac1fc5355bf2764376eb661c445e&language=pt-br&&with_networks=213')
      setOriginal(res.data.results)
   }
GetOriginals();
  },[])

const ArrowLeft = () =>{
  let x = scrollx + Math.round(window.innerWidth / 2);
  if(x > 0){
    x = 0
  }
  setscrollx(x)

  }
      

const ArrowRight = () =>{
  let x = scrollx - Math.round(window.innerWidth / 2);
  let listW = Original.length * 200;
  if((window.innerWidth - listW) > x){
    x = (window.innerWidth - listW) - 60 ;
  }
  setscrollx(x);
}
 
  return(
  <div className='movie-list' id='one-list'>
    <h2 className='title'>Originais da Netflix</h2>
    <div className='sub' id='popular'  style={{
    marginLeft:scrollx,
    width: Original.length * 200,
 
  }}>
      <div className='ArrowLeft' onClick={ArrowLeft}>&lt;</div>
      <div className='ArrowRight' onClick={ArrowRight} >&gt;</div>
    {Original.map((movies) =>{
      return (
    <Link to={'/movie/'+movies.id} key={movies.id}>
  <article>
      <img src={'http://image.tmdb.org/t/p/w200'+movies.poster_path}/>
  </article>
  </Link>

      );
  })}
     </div>
     </div>
   );
 
  }

export default Originals;