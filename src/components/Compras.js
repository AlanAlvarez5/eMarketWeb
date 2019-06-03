import React, { Component } from 'react'
//import axios from 'axios';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import Productos from './Productos';




export default class Compras extends Component {

    state = {
        compras :[] ,
    }


    componentDidMount(){
        fetch('/compras/')
        .then(response => response.json())
        .then(compras => this.setState({compras}))
    }
    render(){
        return(
            <div>

                <h1>Compras</h1>
                {this.state.compras.map(compra => (
                    <div>
                        <h3>{compra.nombre}</h3>
                        <h3>{compra.username}</h3>
                        <h3>{compra.precio}</h3>
                        <h3>{compra.fecha}</h3>
                    </div>
                ))}
            </div>
        );
    }
}