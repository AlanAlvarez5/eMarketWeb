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
             <h1 className="Titles" Style="margin-left: 2.8rem">Compras</h1>

            <div className="container">
                <div className="row" >
                    {this.state.compras.map(compra => (
                         <ProductWrapper className="col-10 mx-auto col-md-7 col-lg-5 my-4">
                            <div className="card justify-content-left" Style="padding: 1.5rem">
                                <h8 className="Titles">PRODUCTO</h8>
                                <p>{compra.nombre}</p>
                                <h8 className="Titles">USUARIO</h8>
                                <p>{compra.username}</p>
                                <h8 className="Titles">PRECIO</h8>
                                <p>{compra.precio}</p>
                                <h8 className="Titles">FECHA DE COMPRA</h8>
                                <p>{compra.fecha}</p>
                            </div>
                        </ProductWrapper>
                    ))}
                    </div>
                </div>
            </div>
        );
    }
}


const ProductWrapper =styled.div`

.card{
    transition: all 1s linear;
    margin-bottom: 1rem;
}

.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 0.3s linear;
  }
&:hover{
    .card{
      border:0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2)
    }
    .card-footer{
      background: rgba(247, 247, 247);
    }
}

.img-container {
    position: relative;
    overflow: hidden;
}

.card-img-top {
    transition: all 0.3s linear;
}

.img-container:hover .card-img-top {
    transform: scale(1.2);
}

.cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: lightGray;
    border: none;
    color: Black;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.3s linear;
}

.img-container:hover .cart-btn {
    transform: translate(0, 0);
}

.cart-btn:hover {
    color: green;
    cursor: pointer;
}

.Titles {
    font-weight: bold;
}

`

