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
                  <ul class ="nav nav-pills navbar-expand-sm navbar-dark px-sm-5">
                    <a class="btn btn-outline-success" href="http://localhost:3000" role="button"> Volver </a>
                    <h3 Style="margin-left: 1rem"> Nuevo Producto </h3>
                    <div className="navbar-brand">
                      <input type="submit" value="Aceptar" class="btn btn-success" onClick={() => {alert("Clase Creada")}}/>
                    </div>
                  </ul>
                </div>
      
                <div class="container">
                  
                  <div className="row" Style="margin-top: 3rem">
                    
                    <div className="col-sm-4">
                      <div className="card text-center shadow-sm  bg-white rounded" Style="width: 100%">
                        <div className="card-body">
                          <div className="form-group">
                            <input type="text" name="proveedor_id" placeholder="ID del proveedor" className="form-control" autofocus defaultValue={this.props.proveedor_id}/>
                          </div>
                          <div className="form-group">
                            <input type="text" name="nombre" placeholder="Nombre" className="form-control" autofocus/>
                          </div>
                          <div className="form-group">
                            <input type="text" name="precio" placeholder="Precio" className="form-control" autofocus/>
                          </div>
                          <div className="form-group">
                            <input type="text" name="descripcion" placeholder="Descripción" className="form-control" autofocus/>
                          </div>
                          <div className="form-group">
                            <input type="number" name="existencia" placeholder="Existencia" className="form-control" autofocus/>
                          </div>

                          <div clasName="form-group">
                            <select name="categoria_id" className="form-control">
                              {this.state.categorias.map(categoria => (
                                <option value={categoria.categoria_id}  >{categoria.categoria}</option>
                              ))}
                            </select>
                          </div>


                        </div>
                      </div> 
                    </div>
                
                    <div className="col-sm-4">
                      <div className="card text-center shadow-sm bg-white rounded" Style="width: 100%">
                        <div className="card-body">

                          <div className="form-group">
                            <img src="/img/preimg.png" alt="showImagen" class="rounded-lg" Style="width: 200px; height: 200px"/>
                          </div>
                          <div className="form-group"> 
                            {/*Posteriormente se hará un boton funcional para subir imagen*/}
                            <input type="text" name="imagen" placeholder="Direccion de la imagen" className="form-control" autofocus/>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div> {/*row*/}

                  {/*
                  <div className="SubmitClase">
                    <input type="submit" value="Aceptar" onClick={() => {alert("Clase Creada")}}/>
                  </div>
                  */}
                  
                </div> {/*Container*/}
              </form>
            </div> 
        );
    }
}


