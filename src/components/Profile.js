import React, { Component } from 'react'
//import axios from 'axios';
import styled from 'styled-components'
import {Link} from 'react-router-dom';


export default class Profile extends Component {
    state = {
        user: ""
    }

    componentDidMount() {
    var url =
        "/Profile/" + this.props.username;
    fetch(url)
    .then(res => res.json())
    .then(user =>
        this.setState({ user })
    );
    }

    render() {
        return (
        <div className="Profile">
        
            <div className="container">
                <div className="row" Style="margin-top: 1rem">
                    <div className="col-sm-4">
                    <div className="card">
                        <InfoProfile>
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

                    <div className="col-sm-7 ml-auto text-center">
                    <div className="card">
                        <InfoProfile>
                            <Link to={"/addProducto/" + this.state.user.user_id}>
                                <button type="button" className="btn btn-success"> Publicar Producto </button>
                            </Link>

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