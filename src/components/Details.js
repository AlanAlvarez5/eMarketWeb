import React, { Component } from 'react';
// import { ProductConsumer } from '../context';
// import {Link} from 'react-router-dom';
// import {ButtonContainer} from './Button'
import styled from 'styled-components';



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
        <HubHeader className = "nav navbar-expand-sm navbar-dark px-sm-5">
            <div>
              <a className="btn btn-outline-success" href="/" role="button"> Volver </a>
            </div>
        </HubHeader>


        
        <div class="container">
          
          <div className="row" Style="margin-top: 1rem">
                                        
            {/*Hub de la Imagen*/}
            <div className="col-sm-4">
                <div className="card shadow-sm bg-white rounded" Style="width: 100%">
                    <div className="card-body">
                      <div className="form-group"> 
                        <img src={this.state.data.imagen} alt="showImagen" class="rounded-lg" Style="width: 100%; height: 100%"/>                    
                      </div>
                    </div>
                </div>
            </div>


            {/*Hub de datos del producto (los input(*/}
            <div className="col-sm-7 ml-auto">
              <InfoProducto>
                <h1>{this.state.data.nombre}</h1>
                <h4>${this.state.data.precio} </h4>
                <p> {this.state.data.descripcion}</p>
                <h7 className="Titles">EXISTENCIA </h7>
                <p>{this.state.data.existencia}</p>
              </InfoProducto>
              <div>
                <button type="button" className="btn btn-success"> Agregar a carrito </button>
              </div>
            </div>
                

          </div> {/*row*/}

        </div> {/*Container*/}
    </div>




    );
  }
}

const InfoProducto = styled.div`
  
.Titles {
  font-weight: bold;
}

`

const HubHeader = styled.nav`
    background: var(--mainWhite);
    .nav-link{
      color: green !important;
    }
`

