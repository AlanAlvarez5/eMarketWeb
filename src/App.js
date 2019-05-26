import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header';
import AddProducto from './components/addProducto';
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Ejemplo from   './components/Ejemplo';
import Home from './components/Home';

export default class Class extends Component {

    render() {
        return (
            <React.Fragment>
              <Header />
              <Switch>
                <Route exact path ="/" component={Home} />
                <Route exact path ="/AddProducto" component={AddProducto} />
                <Route path = "/SignUp" component = {SignUp}></Route>
                <Route path = "/SignIn" component = {SignIn}></Route>
                <Route path= "/Ejemplo" component = {Ejemplo}></Route>

              </Switch>
              </React.Fragment>
        );
    }
}