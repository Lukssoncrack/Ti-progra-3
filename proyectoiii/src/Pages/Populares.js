import React, { Component } from 'react';
import MovieGrid from '../Components/MovieGrid/MovieGrid';
import Loading from '../Components/Loading/Loading';

class Populares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            busqueda: '',
            cargando: true,
            peliculasFiltradas: [],
            pagina: 1,
        }
        this.API_KEY = "1d647c75a2cc59b2d409129bc1e32ed0"
    }
    componentDidMount() {
        this.fetchPeliculas()
    }

    fetchPeliculas() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}&language=en-US&page=${this.state.pagina}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    peliculas: this.state.peliculas.concat(data.results),
                    cargando: false,
                });
            })
            .catch(function (error) {
                console.log('Error: ', error);
            })
    }

    cargarMas() {
        this.setState(
            { pagina: this.state.pagina + 1, cargando: true },
            () => this.fetchPeliculas()
        )
    }

    filtrarPeliculas(evento){
        this.setState({busqueda: evento.target.value})
    }

    render() {
        if (this.state.cargando) {
            return <Loading />
        }
        return (
            <div>
                <h1>Peliculas en cartelera</h1>
                <form>
                    <input type = 'text' value={this.state.busqueda} onChange={(evento) => this.setState({busqueda: evento.target.value})}/>
                </form>
                <MovieGrid movies={this.state.peliculas.filter(pelicula => pelicula.title.toLowerCase().includes(this.state.busqueda.toLowerCase()))}/>

                <button  onClick={() => this.cargarMas()}>Cargar mas</button>
            </div>
        )
    }
}

export default Populares;
