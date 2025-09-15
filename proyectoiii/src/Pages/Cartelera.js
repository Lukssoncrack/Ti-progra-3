import React, { Component } from 'react';
import MovieGrid from '../Components/MovieGrid/MovieGrid';
import Loading from '../Components/Loading/Loading';


class Cartelera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            busqueda: '',
            cargando: true,
        }
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1')
            .then(response => response.json())
            .then(data => {
                if (data.results) {
                    this.setState({
                        peliculas: data.results,
                        cargando: false,
                    });
                }
            })
            .catch(function (error) {
                console.log('Error: ', error);

            })
    }


    render() {
        if (this.state.cargando) {
            return <Loading />
        }
        return (
            <div>
                <h1>Peliculas en cartelera</h1>
                <MovieGrid peliculas={this.state.peliculas} />
            </div>
        )

    }
}
export default Cartelera;