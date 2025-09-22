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

    
    filtrarSeries(evento){
        this.setState({busqueda: evento.target.value})
        let SerieFiltrada = this.state.series.filter((serie) => serie.includes(this.state.busqueda))
        console.log(this.state.busqueda, SerieFiltrada)
    }

    cargarMasSeries() {
        this.setState(
            { paginaSeries: this.state.paginaSeries + 1, cargando: true },
            this.fetchSeries
        )
    }

    render() {
        if (this.state.cargando) {
            return <Loading />
        }
        return (
            <div>
                <h1> Series Populares</h1>
                <form>
                    <input type = 'text' value={this.state.busqueda} onChange={(evento) => this.filtrarSeries(evento)}/>
                </form>
                <button  onClick={() => this.cargarMas()}>Cargar mas</button>
            </div>
        )
    }



}

export default SeriesPopulares