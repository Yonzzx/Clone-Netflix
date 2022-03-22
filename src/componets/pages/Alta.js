import React, {Component, useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import Api from '../../Api';

function Alta(){
const [InALta, setInAlta] = useState([])
const [scrollx, setscrollx] = useState(-400)
useEffect(()=>{
async function GetAlta(){
let res = await Api.get('discover/movie?api_key=6415ac1fc5355bf2764376eb661c445e&language=pt-br&sort_by=popularity.desc&include_adult=true')
 setInAlta(res.data.results)
}
GetAlta();
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
    let listW = InALta.length * 200;
    if((window.innerWidth - listW) > x){
      x = (window.innerWidth - listW) - 60 ;
    }
    setscrollx(x);
   
          }
       
    return(
      <div className='movie-list'>
      <h2>Em Alta</h2>
    <div className='sub' id='toprated' style={{
       marginLeft: scrollx,
       width: InALta.length * 200,
     }}>
    <div className='ArrowLeft' onClick={ArrowLeft}>&lt;</div>
      <div className='ArrowRight' onClick={ArrowRight}>&gt;</div>
    {InALta.map((movies) =>{
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

export default Alta;
