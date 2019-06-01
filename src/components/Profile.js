import React, { Component } from 'react'
//import axios from 'axios';

export default class Profile extends Component {
    state = {
        user: ""
    }

    componentDidMount() {
    var url =
        "/authentication/Profile" + this.props.username;
    fetch(url)
    .then(res => res.json())
    .then(user =>
        this.setState({ user })
    );
    }

    render() {
        return (
        <div className="Profile">
       <div className="HubDeUsuario">
            <h2>{this.state.user.nombre}</h2>
            <p className="Cargo"> Info </p>

        </div>                
  
        </div>
        );
    }
}

