  import React, { Component } from 'react';
  import MovieGrid from '../Components/MovieGrid/MovieGrid';
  import Loading from '../Components/Loading/Loading';
  import Movie from '../Components/Movie/Movie';
  //Import No tiene  el componente de la card (PeliculaSeriesCard).
  //clases bien usadas 
  //imports 



  class Favoritos extends Component {
    constructor(props) {
      super(props);
      this.state = {
        favoritos: []
        
      };
    }


    
    componentDidMount() {
      let favoriteMoviesL = localStorage.getItem("favoritos")

      let favoritos;
      if (favoriteMoviesL === null){
        favoritos = [];
      }else{
        favoritos = JSON.parse(favoriteMoviesL)
      }
      this.setState({favoritos: favoritos});
    }

///fetch 


    render(){
      return(
        <React.Fragment>
          <header />
          <div className=''>
            <h2>Favoritos</h2>

          {this.state.favoritos.filter(elemento => elemento.title).length > 0 ? (
          <div className=''>
            <h3>Tus pelicualas favoritas</h3>
            <section>
              <div className=''>
                {this.state.favoritos.filter(elemento => elemento.title). map(elemento => (
                  <Movie 
                  key= {elemento.id}
                  item ={elemento}
                  />

                ))}
              </div>
            </section>
            </div>
            ) : (
              <h3>No tenes ninguna pelicuala en favoritos</h3>
            )}
            {this.state.favoritos.filter(elemento => elemento.name).length > 0 ? (
              <div className=''>
                <h3>Tus peliculas favoritos</h3>
                <section>
                  <div className=''>
                  {this.state.favoritos.filter(elemento => elemento.name).map(elemento => (
                    <Movie
                    key = {elemento.id}
                    item = {elemento}
                    />
                  ))}
                  </div>
                </section>
              </div>
            ) : (
              <h3>No tenes ninguna serie en favoritos</h3>
            )}

          </div>
          <footer />
        </React.Fragment>
      );
    }

  }


  

  export default Favoritos;
