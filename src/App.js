import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header';
import SignUp from './components/SingUp';
import "bootstrap/dist/css/bootstrap.min.css";




export default class Class extends Component {

    render() {
        return (
            <React.Fragment>
                <Header/>
                <Switch>
                    {/*<Route path = "/cart" component = {Cart}></Route>*/}
                    <Route path = "/SignUp" component = {SignUp}></Route>
                </Switch>
            </React.Fragment>
        );
    }
}