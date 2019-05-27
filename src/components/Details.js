import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'

export default class Details extends Component {
  
    state ={data : "",
            clases: []}

    componentDidMount() {
    var url =
        "/Details" + this.props.producto_id;
    fetch(url)
    .then(res => res.json())
    .then(data =>
        this.setState({ data })
    );

    }
  
  
  render() {
    return (

    <div class="Details">

      <div className="HubDeAlumno">
        <h2>{this.state.data.nombre}</h2>
        <p className="Cargo"> Alumno </p>
      </div>

      <div className="InformacionAlumno">
        <p>{this.state.data.proveedor_ida}</p>
        <p>{this.state.data.precio}</p>
        <p>{this.state.data.descripcion}</p>
        <p>{this.state.data.exitencia}</p>
        <p>{this.state.data.categoria_id}</p>
        <p>{this.state.data.genero}</p>
      </div>
      
    </div>




    );
  }
}
