import React, { Component } from 'react';

export default class Ejemplo extends Component {
    render() {
        return (                
                        <div className="card text-center shadow-sm  bg-white rounded" Style="width: 100%; heigh">
                
                            <div className="card-header">
                                <ul class="nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="http://localhost:3000"> Volver </a>
                                    </li>
                                </ul>
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
                                </form>
                            </div>
                        </div>



        );
    }
}