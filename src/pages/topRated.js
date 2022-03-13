import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class TopRated extends Component{
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
 let url = 'https://api.themoviedb.org/3/tv/top_rated?api_key=6415ac1fc5355bf2764376eb661c445e&language=pt-br&page=4'
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
      <div className='movie-list'>
      <h2>Recomendados para você</h2>
    <div className='sub' id='toprated'>

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

export default TopRated;