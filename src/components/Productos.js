import React,{Component} from 'react';
import {Link} from 'react-router-dom';

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
            <div className="Productos">

                <div className="HubD" >
                {this.state.productos.map(producto => (

                    <tr key={producto.id} >
                        <td>{producto.nombre}</td>

                        <td>
                            <Link to={"/Productos/" + producto.id}>
                                <button className="DetallesProducto"> Detalles </button>
                            </Link>
                        </td>

                    </tr>
                ))}
                </div>

            </div>

        );
    }


}
