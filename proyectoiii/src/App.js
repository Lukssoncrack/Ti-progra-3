import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Populares from "./Pages/Populares";
import Cartelera from "./Pages/Cartelera";
import SeriesPopulares from './Pages/SeriesPopulares';
import SerieDetail from './Pages/SerieDetail';
import SearchResults from "./Pages/SearchResults";
import NotFound from './Pages/NotFound';
import MovieDetail from './Components/MovieDetail/MovieDetail';
import Busqueda from "./Components/Busqueda/Busqueda";
import SeriesCartelera from './Pages/SeriesCartelera';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header>        </Header>
    <Busqueda></Busqueda>

        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/favorites" component={Favorites}></Route>
          <Route path="/populares" component={Populares}></Route>
          <Route path="/seriesPopulares" component={SeriesPopulares}></Route>
          <Route path="/seriesCartelera" component={SeriesCartelera}></Route>
          <Route path="/cartelera" component={Cartelera}></Route>
          <Route path="/search/:query/:type" component={SearchResults}></Route>
          <Route path="/movies/:movieId" exact component={MovieDetail}></Route>
          <Route path="/series/:serieId" exact component={SerieDetail}></Route> 
          <Route path="" component={NotFound} />
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;