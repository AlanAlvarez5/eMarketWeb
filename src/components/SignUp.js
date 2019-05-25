import React, { Component } from 'react';

export default class SignUp extends Component {
    render() {
        return (
            <div className="container p-4" >
                <div className="row">
                    <div className="col-md-4 mx-auto  ">
                        <div className="card text-center shadow-sm  bg-white rounded" Style="width: 100%; heigh">
                
                            <div className="card-header">
                                <h3>Registro</h3>
                            </div>
                            <div className="card-body">
                                <form action="/users/addUser" method="post">
                                    <div className="form-group">
                                        <input type="text" name="nombre" placeholder="Nombre" className="form-control" autofocus/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="correo" placeholder="E-Mail" className="form-control" autofocus/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" placeholder="Contraseña" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="direccion" placeholder="Direccion" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="ciudad" placeholder="Ciudad" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="estado" placeholder="Estado" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" name="cp" placeholder="C.P" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="telefono" placeholder="Telefono" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="rfc" placeholder="RFC" className="form-control"/>
                                    </div>
                                    <div className = "card-text text-left" >
                                        <p >Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso de Privacidad de eMarket. </p>
                                    </div>
                                    <div className="form-group text-right" >
                                        <button className="btn btn-success " type= "submit" value="Submit" onClick={() => {alert("Uusario creado")}}>Registrarse</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

