import React, { Component } from 'react'

export default class EmptyCart extends Component {
    render() {
        return (
            <div className = "container mt-5">
                <div className = "row">
                    <div className = "col-10 mx-auto text-center text-title">
                        <h1>El carrito está vacio</h1>
                        <h4>¿No sabes qué comprar? ¡Miles de productos te esperan!</h4>
                    </div>
                </div>
            </div>
        )
    }
}
