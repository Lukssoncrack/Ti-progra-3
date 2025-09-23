import React, { Component } from 'react';
import MovieGrid from '../Components/MovieGrid/MovieGrid';
import Loading from '../Components/Loading/Loading';
import Movie from '../Components/Movie/Movie';



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDY0N2M3NWEyY2M1OWIyZDQwOTEyOWJjMWUzMmVkMCIsIm5iZiI6MTc1NzYyMDI1OC43MjIsInN1YiI6IjY4YzMyODIyODQyMzZiOTYxNmEyNmFkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MvaKrJXB17B36yie7BVCiQwXMd3zm9sSohxkS27hiWE'
  }
};


class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {

      favoriteSeries: [],
      favoriteMovies: [],

    };
  }



  componentDidMount() {
    let favoriteSeriesL = localStorage.getItem("favoritosSeries")
    let seriesParse = JSON.parse(favoriteSeriesL)
    let series = []
    seriesParse.map((serie, idx) => {
      fetch(`https://api.themoviedb.org/3/tv/${serie}?language=en-US`, options)
        .then(res => res.json())
        .then(res => {
          console.log(res)
          series.push(res)
          this.setState({ favoriteSeries: series })
        })
        .catch(err => console.error(err));
    })



    let favoriteMoviesL = localStorage.getItem("favoritosMovies")
    let moviesParse = JSON.parse(favoriteMoviesL)
    let movies = []
    moviesParse.map((movie, idx) => {
      fetch(`https://api.themoviedb.org/3/movie/${movie}?language=en-US`, options)
        .then(res => res.json())
        .then(res => {console.log(res)
          movies.push(res)
          this.setState({favoriteMovies: movies})
        })
        .catch(err => console.error(err));

    })

    



  


  }
  render() {
    console.log(this.state.favoriteMovies)
       console.log(this.state.favoriteSeries)
    return (
      <React.Fragment>
        <header />
        <div className=''>
          <h2>Favoritos</h2>

          {this.state.favoriteMovies.length === 0 ? <h3>No tenes ninguna pelicuala en favoritos</h3> : 
              <div className=''>
              
              <h3>Tus pelicualas favoritas</h3>
              <section>
                <div className=''>
                {this.state.favoriteMovies.map((peli , idx) =>
                  <Movie
                      key = {peli.id}
                      movie ={peli}
                      type = {peli.type}
                      />
                )}

                 
                </div>
              </section>
            </div>
              }

              
          {this.state.favoriteSeries.length === 0 ? <h3>No tenes ninguna serie en favoritos</h3> : 
              <div className=''>
              
              <h3>Tus series favoritas</h3>
              <section>
                <div className=''>
                {this.state.favoriteSeries.map((serie , idx) =>
                  <Movie
                      key = {serie.id}
                      movie ={serie}
                      type = {serie.type}
                      />
                )}
            
              
        
                
                </div>
              </section>
            </div>
  }
        
           
         

        </div>
        <footer />
      </React.Fragment>
    );
  }

}




export default Favoritos;
