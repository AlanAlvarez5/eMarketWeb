import React, {Component} from 'react';
import styled from 'styled-components';

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
                

                <HubHeader className = "nav navbar-expand-sm navbar-dark px-sm-5">
                  <div>
                    <a className="btn btn-outline-success" href="http://localhost:3000" role="button"> Volver </a>
                  </div>
                  <ul className="ml-1">
                      <h3> Nuevo Producto</h3>
                  </ul>
                    
                  <div className="ml-auto">
                      <input type="submit" value="Publicar" class="btn btn-success" />
                  </div>
                </HubHeader>
      
                <div class="container">
                  <div className="row" Style="margin-top: 1rem">
                    
                    {/*Hub de datos del producto (los input(*/}
                    <div className="col-sm-5">
                      <div className="card shadow-sm bg-white rounded" Style="width: 100%">
                        <div className="card-body">
                                                  
                          <div className="form-group">
                            <label for="validationDefault01"> ID del user </label>
                            <input type="text" name="user_id" placeholder="ID del proveedor" id ="validationDefault01" className="form-control" autofocus defaultValue={this.props.proveedor_id} required/>
                          </div>
                          <div className="form-group">
                            <label for="validationDefault02"> Nombre del producto </label>
                            <input type="text" name="nombre" placeholder="Nombre del producto" id="validationDefault02" className="form-control" autofocus required/>
                            <div class="invalid-feedback"> Complete el campo por favor</div>
                          </div>
                          <div className="form-group">
                            <label for="validationDefault03"> Precio </label>
                            <input type="text" name="precio" placeholder="Precio" id="validationDefault03" className="form-control" autofocus required/>
                          </div>
                          <div className="form-group">
                            <label for="validationDefault04"> Descripción </label>
                            <input type="text" name="descripcion" placeholder="Descripción" id="validationDefault04" className="form-control" autofocus required/>
                          </div>
                          <div className="form-group">
                            <label for="validationDefault05"> Número de productos disponibles </label>
                            <input type="number" name="existencia" placeholder="Existencia" id="validationDefault05" className="form-control" autofocus required/>
                          </div>
                          <div clasName="form-group">
                            <label> Categoría </label> 
                            <select name="categoria_id" className="form-control">
                              {this.state.categorias.map(categoria => (
                                <option value={categoria.categoria_id}  >{categoria.categoria}</option>
                              ))}
                            </select>
                          </div>

                        </div>
                      </div> 
                    </div>
                
                    {/*Hub de la Imagen*/}
                    <div className="col-sm-4 ml-auto">
                      <div className="card shadow-sm bg-white rounded" Style="width: 100%">
                        <div className="card-body">

                          <div className="form-group">
                            <img src="/img/preimg.png" alt="showImagen" class="rounded-lg" Style="width: 100%; height: 100%"/>
                          </div>
                          
                          <div className="form-group"> 
                            {/*Posteriormente se hará un boton funcional para subir imagen*/}
                            <label> Imagen del producto </label>
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

const HubHeader = styled.nav`
    background: var(--mainWhite);
    .nav-link{
      color: green !important;
    }
`





