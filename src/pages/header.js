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
        let url = 'https://api.themoviedb.org/3/trending/tv/week?api_key=6415ac1fc5355bf2764376eb661c445e&language=pt-br'
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
        return(
            <header id="header">
                <div>
                <Link to={'/'}><img src={Logo} id='logo'/></Link>
                </div>
                <div className="feature">
                  <div className="feature-h"> 
                <div className="info">
                   <h1>{this.state.movies.name}</h1>
                   <p>{}</p>
                 <div className="movie-disc">
                 <p>{this.state.movies.overview}</p>
                 </div>
                   <div className="btn">
                       <a href="#" id="btn-play"><span>&#9654;</span>Assitir</a>
                       <a href="#" id="btn-list"><span>✚</span>Minha Lista</a>
                   </div>
                   </div>
                   {console.log(this.state.movies)}
                </div>
                </div>
            
            </header>
            );
     }
        
    }

export default Header;