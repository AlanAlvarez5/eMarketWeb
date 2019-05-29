import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import Title from './Title';
import styled from 'styled-components';

export default class Productos extends Component {

    state = {productos: []}

    componentDidMount() {
        fetch('/Productos')
          .then(res => res.json())
          .then(productos => this.setState({ productos }));
    }
    alert() {
        alert("Producto eliminado");
    }

    render() {
        return (
            <div className="container">
                <Title name = "Nuestros" title="productos"/>
                <div className="row" >
                    {this.state.productos.map(producto => (
                        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                            <div className="card">
                                <div className="img-container p-5">
                                    <Link>
                                        <img src={producto.imagen} alt="product" className="card-img-top"/>
                                    </Link>
                                    {/* boton de Carrito
                                    <button className = "cart-btn" disabled = {inCart ? true : false} onClick = { ()=>{
                                        value.addToCart(id);
                                        value.openModal(id);
                                        }}>
                                    {inCart ? 
                                        (<p className="text-capitalize mb-0" disabled>
                                        {" "}
                                        En Carrito</p>
                                        ):(
                                        <i className="fas fa-cart-plus"/>
                                        )}
                                    </button>
                                    */}
                                </div>

                                <div className="card-footer d-flex justify-content-between">
                                    <div key={producto.producto_id} >
                                        <p className="align-self-center mb-0">
                                            {producto.nombre}
                                        </p>
                                        <h5 className="text-blue font-italic mb-0">
                                            <span className="mr-1">$</span>
                                            {producto.precio}
                                        </h5>
                                        <Link to={"/Productos/" + producto.producto_id}>
                                            <button className="DetallesProducto"> Detalles </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ProductWrapper>
                    ))}
                </div>
            </div>


        );
    }
}


{/*
Productos.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number,
      img: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      inCart: PropTypes.bool 
    }).isRequired
};

*/}

const ProductWrapper =styled.div`

.card{
    border-color: transparent;
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

.img-container: hover .cart-btn {
    transform: translate(0, 0);
}

.cart-btn: hover {
    color: green;
    cursor: pointer;
}


`

