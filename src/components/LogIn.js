import React, { Component } from 'react';


export default class LogIn extends Component {
    state = {
        username: "",
        user_id: 0,
    }

/*
    setUserId = (value) => {
        localStorage.setItem('user_id', value)
    }

    componentDidMount() {
        fetch('/LogIn')
        .then(res => res.json())
        .then(user_id => this.setState({user_id: user_id}));
        this.setUserId(this.state.user_id)
    }
*/
    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="card text-center">
                            <div className="card-header">
                                <h3>Iniciar Sesión</h3>
                            </div>
                            <img src="/img/user.png" alt="Logo Fazt" className="card-img-top mx-auto m-2 rounded-circle w-50"/>
                            <div className="card-body">
                                
                                <form action="/authentication/LogIn" method="post">
                                    <div className="form-group">
                                        <input type="text" name="username" placeholder="Usuario" className="form-control" autofocus />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" placeholder="Contraseña" className="form-control"/>
                                    </div>
                                    <button className="btn btn-success btn-block" type="submit">
                                        Ingresar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

