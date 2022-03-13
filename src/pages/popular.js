import React, {Component} from 'react'
import {Link} from 'react-router-dom';
class Popular extends Component{
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
  this.setState({movies:json.results})

  }).catch(err =>{
    console.log(err)
  })

 }

  render(){
    return(
  <div className='movie-list' id='one-list'>
    <h2 className='title'>Originais da Netflix</h2>
    <div className='sub' id='popular' >

    {this.state.movies.map((movies) =>{
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

}

export default Popular;