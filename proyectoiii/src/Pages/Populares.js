import React, { Component } from 'react';
import MovieGrid from '../Components/MovieGrid/MovieGrid';
import Loading from '../Components/Loading/Loading';

class Populares extends Component {
    constructor(props){
        super(props);
        this.state = {
            peliculas:[],
            busqueda: '',
            cargando: true,
        }
    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    peliculas: data.results,
                    cargando: false,
                });
            })
            .catch(function(error){
                console.log('Error: ', error);
                
            })
    }

    render(){
        return(
            <div>
                <h1>Peliculas populares</h1>
                {this.state.cargando ? (
                    <p>Cargando...</p>
                ) : (
                    <ul>
                        {this.state.peliculas.map((pelicula) => (
                            <li key = {pelicula.id}>
                                <h3>{pelicula.title}</h3>
                                <img src=''/> 
                            </li>
                        ))}
                    </ul>
                )}

            </div>
        )
    }
}


export default Populares;
