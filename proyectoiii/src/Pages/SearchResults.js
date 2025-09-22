import React, { Component } from "react";



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDY0N2M3NWEyY2M1OWIyZDQwOTEyOWJjMWUzMmVkMCIsIm5iZiI6MTc1NzYyMDI1OC43MjIsInN1YiI6IjY4YzMyODIyODQyMzZiOTYxNmEyNmFkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MvaKrJXB17B36yie7BVCiQwXMd3zm9sSohxkS27hiWE'
  }
};

class SearchResults extends Component {

  constructor(props){
    super(props);
    this.state ={
      results:[],
    };
  }  
  
  componentDidMount(){
    const query = this.props.match.params.query
    const type = this.props.match.params.type
  };

  render() {
    return (
      <React.Fragment>
          <h2 className="">Resultados: {this.props.match.params.query}</h2>
        
      </React.Fragment>

     
    );
  }
}



export default SearchResults;