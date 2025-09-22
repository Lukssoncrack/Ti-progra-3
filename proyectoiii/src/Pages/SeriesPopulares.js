import React, { Component } from 'react';
import Loading from '../Components/Loading/Loading'

class SeriesPopulares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            busquedaSeries: '',
            cargando: true,
            paginaSeries: 1,
        }
        this.API_KEY = "1d647c75a2cc59b2d409129bc1e32ed0"
    }
    componentDidMount() {
        this.fetchSeries()
    }

    fetchSeries() {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${this.API_KEY}&language=en-US&page=${this.state.paginaSeries}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    series: this.state.series.concat(data.results),
                    cargando: false,
                });
            })
            .catch(function (error) {
                console.log('Error: ', error);
            })
    }


    cargarMasSeries() {
        this.setState(
            { paginaSeries: this.state.paginaSeries + 1, cargando: true },
            this.fetchSeries
        )
        this.fetchSeries();
    }

    render() {
        if (this.state.cargando) {
            return <Loading />
        }
        return (
            <div>
                <h1> Series Populares</h1>
                <form>
                    <input type='text' value={this.state.busquedaSeries} onChange={(evento) => this.setState({ busquedaSeries: evento.target.value })} />

                </form>
                <ul>
                    {this.state.series.map((serie) => {
                        if (serie.name.toLowerCase().includes(this.state.busquedaSeries.toLocaleLowerCase())) {
                            return (
                                <li key={serie.id}>
                                    <h3>{serie.name}</h3>
                                    <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} />

                                </li>
                            )
                        } else {
                            return null
                        }

                    })}
                </ul>
                <button onClick={this.cargarMasSeries}>Cargar mas</button>
            </div>
        )
    }



}

export default SeriesPopulares