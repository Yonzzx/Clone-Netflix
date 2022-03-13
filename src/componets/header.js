import React, {Component} from "react";
import { Link } from "react-router-dom";
import Logo from './assets/logo.png'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
       movies:[]
        };
        this.loadFilme = this.loadFilme.bind(this);
       }

componentDidMount(){
        this.loadFilme();
}       
loadFilme(){
        let url = 'https://api.themoviedb.org/3/tv/popular?api_key=6415ac1fc5355bf2764376eb661c445e&language=pt-br&page=1'
         fetch(url)
         .then( r => r.json())
         .then( json =>{
            const random = Math.floor(Math.random() * json.results.length);
           this.setState({movies:json.results[random]})
           document.getElementById('header').style.backgroundImage = `url(http://image.tmdb.org/t/p/original${this.state.movies.backdrop_path})`
         }).catch(err =>{
           console.log(err)
         })
        }
   
    render(){
       let FisrtDate = new Date(this.state.movies.first_air_date)
        return(
            <header id="header">
                <div>
                <Link href="/"><img src={Logo} id='logo'/></Link>
                </div>
                <div className="feature">
                  <div className="feature-h"> 
                <div className="info">
                   <h1>{this.state.movies.name}</h1>
                     <div className="movie-popularity">
                       <p>{this.state.movies.vote_average}</p>
                       <p>{FisrtDate.getFullYear()}</p>
                       <p>{this.state.movies.number_of_seasons}</p>
                     </div>
                     
                 <div className="movie-disc">
                 <p>{this.state.movies.overview}</p>
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
        
    }

export default Header;