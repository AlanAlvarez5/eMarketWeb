import React, { Component } from 'react';

export default class CartColumns extends Component {
    render() {
        return <div className = "container-fluid text-center d-none d-lg-block">
            <div className = "row">
                <div className = "col-10 mx-auto col-lg-2">
                    <p className = "text-uppercase">Productos</p>
                </div>

                <div className = "col-10 mx-auto col-lg-2">
                    <p className = "text-uppercase">Nombre</p>
                </div>

                <div className = "col-10 mx-auto col-lg-2">
                    <p className = "text-uppercase">Precio</p>
                </div>

                <div className = "col-10 mx-auto col-lg-2">
                    <p className = "text-uppercase">Cantidad</p>
                </div>

                <div className = "col-10 mx-auto col-lg-2">
                    <p className = "text-uppercase">Eliminar</p>
                </div>
                
                <div className = "col-10 mx-auto col-lg-2">
                    <p className = "text-uppercase">Total</p>
                </div>
            </div>
        </div>;
    }
}
