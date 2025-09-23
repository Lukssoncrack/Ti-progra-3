import React, { Component } from 'react';
import {withRouter} from "react-router-dom";


class Busqueda extends Component {
    constructor(props){
        super(props);
        this.state ={
            buscador: "",
            type: 'movies'
        };
    }

    ejecutarBusqueda(e){
        e.preventDeFault();
        this.props.push("/search/" + this.state.buscador + '/' 
            + this.state.type
        );

    };

    controlarCambios(e){
        this.setState({buscador: e.target.value});
    };

    controlarCambiosRadio(e){
        this.setState({type: e.target.value});
    };


    

    render(){
        return(
            <form className='' onSubmit={(e) => this.ejecutarBusqueda(e)}>
                <input className='' placeholder='Buscador' value={this.state.buscador} onChange={(e) => this.controlarCambios(e)}></input>
            
               <label> <p>Pelis</p><input type="radio"  name='type' value='movies' id=''  onChange={(e) =>  this.controlarCambiosRadio(e)}  /></label>
               
                <label> <p>series</p> <input type="radio" name='type' value='tv' id=''onChange={(e) =>  this.controlarCambiosRadio(e)} /> </label>
            
            <button className='' type='submit'>Buscar</button>
            </form>
        )
    }
}

export default withRouter(Busqueda);
