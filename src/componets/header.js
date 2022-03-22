import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Api from "../Api";
import Logo from './assets/logo.png'

function Header (){
const [Head, setHead] = useState([]);
useEffect(()=>{
 async function GetHeader(){
     let res = await Api.get('discover/movie?api_key=6415ac1fc5355bf2764376eb661c445e&language=pt-br&sort_by=popularity.desc')
     const random = Math.floor(Math.random() * res.data.results.length);
         setHead(res.data.results[random])
  }
  GetHeader();
},[])     
let FisrtDate = new Date(Head?.release_date)
   
 return(
            <header id="header" style={{
              backgroundImage: `url(http://image.tmdb.org/t/p/original${Head.backdrop_path})`
            }}>
                <div>
                <Link to={"/"}><img src={Logo} id='logo'/></Link>
                </div>
                <div className="feature">
                  <div className="feature-h"> 
                <div className="info">
                   <h1>{Head.name}</h1>
                     <div className="movie-popularity">
                       <p>{Head.vote_average}</p>
                       <p>{FisrtDate?.getFullYear()}</p>
                       <p>{Head.number_of_seasons}</p>
                     </div>
                     
                 <div className="movie-disc">
                 <p>{Head.overview}</p>
                 </div>
                   <div className="btn">
                       <a href="#" id="btn-play"><span>&#9654;</span>Assitir</a>
                       <a href="#" id="btn-list"><span>✚</span>Minha Lista</a>
                   </div>
                   </div>
                
                </div>
                </div>
            
            </header>
            );
     }
        

export default Header;