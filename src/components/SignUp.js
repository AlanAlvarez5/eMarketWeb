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
                                <form action="/authentication/SignUp" method="post">
                                    <div className="form-group">
                                        <input type="text" name="username" placeholder="Usuario" id="validationDefault01" className="form-control" autofocus required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" placeholder="Contraseña" id="validationDefault02" className="form-control" required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="nombre" placeholder="Nombre" id="validationDefault03" className="form-control" autofocus required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="correo" placeholder="E-Mail" id="validationDefault04" className="form-control" autofocus required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="direccion" placeholder="Direccion" id="validationDefault05" className="form-control" required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="ciudad" placeholder="Ciudad" id="validationDefault06" className="form-control" required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="estado" placeholder="Estado" id="validationDefault07"className="form-control" required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" name="cp" placeholder="C.P" id="validationDefault08" className="form-control" required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="telefono" placeholder="Telefono" id="validationDefault09" className="form-control" required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="rfc" placeholder="RFC" id="validationDefault10"className="form-control" required/>
                                    </div>
                                    <div className = "card-text" >
                                        <p >Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso de Privacidad de eMarket. </p>
                                    </div>
                                    <div className="form-group" >
                                        <button className="btn btn-success " type= "submit" value="Submit">Registrarse</button>
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

