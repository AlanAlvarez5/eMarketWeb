import React, { Component } from 'react'
//import axios from 'axios';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import Productos from './Productos';




export default class Profile extends Component {
    state = {
        user: ""
    }

    componentDidMount() {
    var url =
        "/Profile/" + this.props.username;
    fetch(url,  {credentials: 'include'})
    .then(res => res.json())
    .then(user =>
        this.setState({ user })
    );
    }

    render() {
        return (
        <div className="Profile">
            <HubHeader className = "nav navbar-expand-sm navbar-dark px-sm-5 text-right">                    
                <div className="ml-auto">
                    <Link to={"/addProducto/" + this.state.user.user_id}>
                        <button type="button" className="btn btn-success"> Publicar Producto </button>
                    </Link>
                </div>
            </HubHeader>

            <div className="container">
                <div className="row" Style="margin-top: 1rem">
                    <div className="col-sm-3">
                        <div className="card shadow-sm bg-white rounded" Style="padding: 2rem">
                            <InfoProfile>
                                <h2 class="Titles">Perfil</h2>
                                <h8 className="Titles">NOMBRE</h8>
                                <p>{this.state.user.nombre}</p>
                                <h8 className="Titles">CORREO</h8>
                                <p>{this.state.user.correo}</p>
                                <h8 className="Titles">TELEFONO</h8>
                                <p>{this.state.user.telefono}</p>
                                <h8 className="Titles">DIRECCION</h8>
                                <p>{this.state.user.direccion}</p>
                                <h8 className="Titles">CIUDAD</h8>
                                <p>{this.state.user.ciudad}</p>
                                <h8 className="Titles">ESTADO</h8>
                                <p>{this.state.user.estado}</p>
                                <h8 className="Titles">CODIGO POSTAL</h8>
                                <p>{this.state.user.cp}</p>
                                <h8 className="Titles">RFC</h8>
                                <p>{this.state.user.rfc}</p>
                            
                                {/*Editar usuario*/}
                                <div>
                                    <button type="button" className="btn btn-outline-success"> Editar Información</button>
                                </div>
                            </InfoProfile>   
                        </div>                     
                    </div>

                    <div className="col-sm-9 ml-auto text-center">
                        <div className="card shadow-sm bg-white rounded">
                        <InfoProfile>
                            <h2 Style="margin-top: 2rem"> Mis productos en venta </h2>
                            <Productos></Productos>
                        </InfoProfile>
                        </div>
                    </div>
                </div>
            </div>                
  
        </div>
        );
    }
}

const InfoProfile = styled.div `

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




