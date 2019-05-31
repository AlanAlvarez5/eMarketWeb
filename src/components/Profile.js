import React, { Component } from 'react'
import axios from 'axios';

export default class Profile extends Component {
    state = {
        user: []
    }

    componentWillMount() {
        axios.get('http://localhost:3001/authentication').then((response) => {
            this.setState({
                user: response.data
            });
        });
    }
    render() {
        return (
            <div>
            
            </div>
        )
    }
}

