import { Component } from "react";
import Loading from '../Components/Loading/Loading';
import { FaHeart } from "react-icons/fa";



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDY0N2M3NWEyY2M1OWIyZDQwOTEyOWJjMWUzMmVkMCIsIm5iZiI6MTc1NzYyMDI1OC43MjIsInN1YiI6IjY4YzMyODIyODQyMzZiOTYxNmEyNmFkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MvaKrJXB17B36yie7BVCiQwXMd3zm9sSohxkS27hiWE'
  }}

class SerieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serie: null,
      isLoading: true
    }; 
  }

 
componentDidMount() {
const serieId = this.props.match.params.serieId;
    fetch(`https://api.themoviedb.org/3/tv/${serieId}?language=es-ES`, options)
       .then(function (response) {    
          return response.json();
       })
        .then((data) => {
        this.setState({ serie: data, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  }


render() {
    const isLoading = this.state.isLoading;
    const serie = this.state.serie;
    if (isLoading) return <Loading />;
    if (!serie) return <p>No se encontro la serie</p>;
    let poster = "https://via.placeholder.com/500x750?text=Sin+imagen";
    if (serie.poster_path) {
      poster = "https://image.tmdb.org/t/p/w500" + serie.poster_path;
    }
    return (
      <section className="movie-detail">
        <h2>{serie.name}</h2>
        <img src={poster} alt={serie} />
        <p>Calificación:{serie.vote_average} / 10</p>
        <p>Fecha de estreno: {serie.lanzamiento}</p>
    
        <p>Sinopsis:{serie.overview}</p>
       
     
      </section>
    );
  }

}
export default SerieDetail;