import "./Movie.css"
import { Component } from "react";
import { Link } from "react-router-dom";



class Movie extends Component {
  render() {
    const { movie } = this.props; 

    return (
      <div>
        <h3>{movie.displayTitle}</h3>
        <Link to={`/movies/${movie.id}`}>Ir a detalle</Link>
      </div>
    );
  }
}

export default Movie;