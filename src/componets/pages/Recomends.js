import React, {Component} from 'react'
import {Link} from 'react-router-dom';


class Recomends extends Component{
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
 let url = 'https://api.themoviedb.org/3/trending/all/week?api_key=6415ac1fc5355bf2764376eb661c445e&language=pt-br&page=4'
  fetch(url)
  .then( r => r.json())
  .then( json =>{
  this.setState({movies:json.results})
  }).catch(err =>{
    console.log(err)
  })

 }


  render(){
    const ArrowLeft = () =>{
      document.getElementById('toprated').style.marginLeft = '-1630px'
          }
          const ArrowRight = () =>{
            document.getElementById('toprated').style.marginLeft = '0'
          }
       
    return(
      <div className='movie-list'>
      <h2>Recomendados para você</h2>
    <div className='sub' id='toprated'>
    <div className='ArrowLeft' onClick={ArrowLeft}>&lt;</div>
      <div className='ArrowRight' onClick={ArrowRight}>&gt;</div>
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

export default Recomends;