import React,{Component} from 'react';

export default class AddProducto extends Component {

    state = {categorias: []}

    componentDidMount() {
      fetch("/productos/categorias")
        .then(res => res.json())
        .then(categorias =>
          this.setState({ categorias })
        );
    }

    render() {
        return (
            <div className="AddProducto">
            <form action="/productos/addProducto" method="post">
            <h2> Nuevo Producto </h2>
                <input type="text" className="inputclass" placeholder="User id" name="proveedor_id" defaultValue={this.props.user_id}/>
                <input type="text" className="inputclass" placeholder="Nombre" name="nombre" />
                <input type="text" className="inputclass" placeholder="Precio" name="precio" />
                <input type="text" className="inputclass" placeholder="Descripción" name="descripcion" />
                <input type="number" className="inputclass" placeholder="Existencia" name="existencia"/>
                <select name="instructor_id">
                  {this.state.categorias.map(categoria => (
                    <option value={categoria.categoria_id}  >{categoria.categoria}</option>
                  ))}
                </select>
                <input type="text" className="inputclass" placeholder="Imagen" name="imagen"/>
              <div className="SubmitClase">
                <input type="submit" value="Aceptar" onClick={() => {alert("Clase Creada")}}/>
              </div>


            </form>
          </div>
        );
    }
}