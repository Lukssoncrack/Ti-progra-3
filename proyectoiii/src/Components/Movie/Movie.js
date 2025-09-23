import "./Movie.css"
import { Component } from "react";
import { Link } from "react-router-dom";
import Favoritos from "../../Pages/Favorites";
import { jsx } from "react/jsx-runtime";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = { mostrarDescripcion: false  , esFav: false};  

  }

  componentDidMount(){
    let seriesString = localStorage.getItem("favoritosSeries")
    let seriesParse = JSON.parse(seriesString)
    if(seriesParse !== null){
      let serieVerdad = seriesParse.includes(this.props.movie.id)
      if (serieVerdad){
        this.setState({esFav: true})
      }
    }


    let moviesString = localStorage.getItem("favoritosMovies")
    let moviesParse = JSON.parse(moviesString)
    if(moviesParse !== null){
      let moviesVerdad = moviesParse.includes(this.props.movie.id)
      if (moviesVerdad){
        this.setState({esFav: true})

      }
    }

    
  }

  agregarDeFavoritos(){
    if(this.props.type === "tv" ){
      let seriesFav = localStorage.getItem("favoritosSeries")
      if(seriesFav == null ){
        let seriesVacio = []
        seriesVacio.push(this.props.movie.id)
        let seriesString = JSON.stringify(seriesVacio)
        localStorage.setItem("favoritosSeries", seriesString)

      }else{
        let seriesParse = JSON.parse(seriesFav)
        seriesParse.push(this.props.movie.id)
        let seriesString = JSON.stringify(seriesParse)
        localStorage.setItem("favoritosSeries", seriesString)
      }
    
    }else{
      let moviesFav = localStorage.getItem("favoritosMovies")
      if(moviesFav == null){
        let moviesVacio = []
        moviesVacio.push(this.props.movie.id)
        let moviesString = JSON.stringify(moviesVacio)
        localStorage.setItem("favoritosMovies", moviesString)
      }else{
        let moviesParse = JSON.parse(moviesFav)
        moviesParse.push(this.props.movie.id)
        let moviesString = JSON.stringify(moviesParse)
        localStorage.setItem("favoritosMovies", moviesString)
      }
    }

    this.setState({
      esFav: true
    })

  } 


  quitarDeFavoritos(){
    if(this.props.type === "tv" ){
      let seriesFav = localStorage.getItem("favoritosSeries")
      let seriesParse = JSON.parse(seriesFav)
      let seriesFilter = seriesParse.filter(ids => ids !== this.props.movie.id)
      let seriesString = JSON.stringify(seriesFilter)
      localStorage.setItem("favoritosSeries", seriesString)

    }else{
      let moviesFav = localStorage.getItem("favoritosMovies")
      let moviesParse = JSON.parse(moviesFav)
      let moviesFilter = moviesParse.filter(ids => ids !== this.props.movie.id)
      let moviesString = JSON.stringify(moviesFilter)
      localStorage.setItem("favoritosMovies", moviesString)
    }

     this.setState({
      esFav: false
    })
  }



  

  render() {
    const  movie  = this.props.movie; 
     const pelicula = movie.poster_path;  
    const descripcion = movie.overview ? movie.overview : "Sin descripción.";
    
    let Seriepeli = ""
    if (this.props.type === "tv") {
      Seriepeli = "/series/" + movie.id;
    } else {
      Seriepeli = "/movies/" + movie.id;
    }
    let peliculas = ''
    if (pelicula) {
      peliculas = "https://image.tmdb.org/t/p/w342" + pelicula;
    } else {
      peliculas = "https://via.placeholder.com/342x513?text=Sin+imagen";
    }
      return(
        <div class='item'>
        <img src={peliculas} alt={movie.displayTitle} className="movie-poster" />
        <h3>{movie.displayTitle}</h3>
        <button onClick={() => this.setState({ mostrarDescripcion: !this.state.mostrarDescripcion })}>
        {this.state.mostrarDescripcion ? "Ocultar descripción" : "Ver descripción"}
      </button>


      {this.state.mostrarDescripcion ? <p>{descripcion}</p> : null}
        <Link to={Seriepeli}>Ir a detalle</Link>

        {this.state.esFav ? <button onClick={() => this.quitarDeFavoritos()}>  Quitar de favoritos</button> :
        
        <button onClick={() => this.agregarDeFavoritos()}>  Agergar a favoritos</button>

      }
      </div>
)
  }
}

export default Movie;