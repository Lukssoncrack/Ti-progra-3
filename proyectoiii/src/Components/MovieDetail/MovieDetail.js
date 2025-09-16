import { Component } from "react";
import "./MovieDetail.css";
import Loading from '../Loading/Loading';
import { FaHeart } from "react-icons/fa";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      isLoading: true
    };
  }
componentDidMount() {
    const { movieId } = this.props.match.params;
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=1d647c75a2cc59b2d409129bc1e32ed0&language=es-ES`)
        .then((response) => response.json())
        .then((data) => {
         this.setState({ movie: data });
        // Vemos favoritos en detalle tmb
        const storage = localStorage.getItem('favoritos');
        const parsedArray = JSON.parse(storage) || [];
        if (parsedArray.includes(movieId)) {
          this.setState({ favorito: true });
        }
      })
      .catch((error) => console.log(error));
}
 agregarFavorito() {
    const { movie } = this.state;
    let guardados = JSON.parse(localStorage.getItem("favoritos") || "[]");
    if (!guardados.includes(movie.id)) {
      guardados.push(movie.id);
      localStorage.setItem("favoritos", JSON.stringify(guardados));
      this.setState({ favorito: true });
    }
  }
quitarFavorito() {
    const { movie } = this.state;
    let guardados = JSON.parse(localStorage.getItem("favoritos") || "[]");
    guardados = guardados.filter(id => id !== movie.id);
    localStorage.setItem("favoritos", JSON.stringify(guardados));
    this.setState({ favorito: false });
  }

render() {
    const { movie, isLoading, error, favorito } = this.state;

    if (isLoading) return <Loading />;
    if (error) return <p>{error}</p>;

    const { title, poster_path, vote_average, release_date, runtime, overview, genres } = movie;
    const poster = poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : "https://via.placeholder.com/500x750?text=Sin+imagen";

    return (
      <section className="movie-detail">
        <h2>{title}</h2>
        <img src={poster} alt={title} />
        <p><strong>Calificación:</strong> {vote_average} / 10</p>
        <p><strong>Fecha de estreno:</strong> {release_date}</p>
        <p><strong>Duración:</strong> {runtime} minutos</p>
        <p><strong>Sinopsis:</strong> {overview}</p>
        <p><strong>Género:</strong> {genres.map(g => g.name).join(", ")}</p>

        <button
          onClick={() =>
            favorito ? this.quitarFavorito() : this.agregarFavorito()
          }
        >
          {favorito ? "Quitar de favoritos" : "Agregar a favoritos"}
        </button>
      </section>
    );
  }

}
export default MovieDetail;