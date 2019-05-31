import React, { Component } from 'react';
// import { ProductConsumer } from '../context';
// import {Link} from 'react-router-dom';
// import {ButtonContainer} from './Button'

export default class Details extends Component {
  
    state ={data : ""}

    componentDidMount() {
    var url =
        "/Productos/Details" + this.props.producto_id;
    fetch(url)
    .then(res => res.json())
    .then(data =>
        this.setState({ data })
    );

    }
  
  
  render() {
    
    return (
      
    <div class="Details">

      <div className="HubDeProducto">
        <h2>{this.state.data.nombre}</h2>
      </div>

      <div className="InformacionProducto">
        <p>{this.state.data.proveedor_id}</p>
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
