import React, {Component} from 'react';




export default class Class extends Component {

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

                <div class="HubHeader" Style="margin-left: 3rem">
                  <ul class ="nav nav-pills">
                    <a class="btn btn-primary" href="http://localhost:3000" role="button"> Volver </a>
                    <h3 Style="margin-left: 1rem"> Nuevo Producto </h3>
                  </ul>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="card text-center shadow-sm  bg-white rounded" Style="width: 100%; heigh">
                      <div className="card-body">
                        <div clasName="form-group">
                          <input type="text" name="proveedor_id" placeholder="ID del proveedor" className="form-control" autofocus defaultValue={this.props.proveedor_id}/>
                        </div>
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
                      </div>
                    </div> 
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <div clasName="form-group">
                          <input type="text" name="proveedor_id" placeholder="ID del proveedor" className="form-control" autofocus defaultValue={this.props.proveedor_id}/>
                        </div>
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
                      </div>
                    </div>
                  </div>
                </div>
             



                  <div className="SubmitClase">
                    <input type="submit" value="Aceptar" onClick={() => {alert("Clase Creada")}}/>
                  </div>
              </form>
            </div>
        );
    }
}


