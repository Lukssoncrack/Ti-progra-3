import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import React from 'react';


class Busqueda extends Component {
    constructor(props){
        super(props);
        this.state ={
            buscador: ""
        };
    }
    ejecutarBusqueda(e){
        e.preventDeFault();
        this.props.push("/busqueda/" + this.state.buscador);

    };

    controlarCambios(e){
        this.setState({buscador: e.target.value});
    };
    

    render(){
        return(
            <form className='' onSubmit={(e) => this.ejecutarBusqueda(e)}>
                <input className='' placeholder='Buscador' value={this.state.buscador} onChange={(e) => this.controlarCambios(e)}></input>
            <button className='' type='submit'>Buscar</button>
            </form>
        )
    }
}

export default withRouter(Busqueda);