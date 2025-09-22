import React, { Component } from "react";
import './SearchForm.css';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDY0N2M3NWEyY2M1OWIyZDQwOTEyOWJjMWUzMmVkMCIsIm5iZiI6MTc1NzYyMDI1OC43MjIsInN1YiI6IjY4YzMyODIyODQyMzZiOTYxNmEyNmFkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MvaKrJXB17B36yie7BVCiQwXMd3zm9sSohxkS27hiWE'
  }
};

class SearchForm extends Component {

  constructor(props){
    super(props);
    this.state ={
      results=[],
      search:""
    };
  }  
  
  //componentDidMount(){
    //const queryParams = new URLSearchParams(this.props.location.search);
    //const type = queryParams.get("type");
    //const query = queryParams.get("query");

    //this.setState({search: query});

 //fetch(`https://api.themoviedb.org/3/search/${type}?language=es-ES&query=${query}&page=1&include_adult=false`, options)
   //   .then((res) => res.json())
     // .then((data) => this.setState({ resultados: data.results }))
      //.catch((error) => console.error("Error en fetch:", error));
  //}
  
  
  render() {
    return (
      <React.Fragment>
        <header>
          <h2 className="">Resultados: {this.state.busqueda}</h2>
        <div>
          {this.state.results.length > 0 ?
          (this.state.results.map(elm => (
            <pelicard
            key={elm}
            nombre={}
            imagen={}
            desctiption={}/>
          )
        )}//los : los vimos <h2>No hay resultados disponibles</h2>
        </div>
        </header>
      </React.Fragment>

     
    );
  }
}

//<div className="search-container">
//                <input onChange={(e) => this.handleInputChange(e)}
  //                  type="text" name='query' value={this.state.query} />
    //            <button onClick={() => this.handleInputSubmit()}  >Buscar</button>
      //      </div>

export default SearchForm;