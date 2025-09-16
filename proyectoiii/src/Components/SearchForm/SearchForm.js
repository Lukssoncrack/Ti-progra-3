import { Component } from "react";
import './SearchForm.css';



export class SearchForm extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </form>
    );
  }
}



export default SearchForm;