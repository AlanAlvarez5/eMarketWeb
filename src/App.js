import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header';
import AddProducto from './components/addProducto'
import "bootstrap/dist/css/bootstrap.min.css";




export default class Class extends Component {

    render() {
        return (
            <BrowserRouter>
              <Header />
              <Switch>
                <Route exact path ="/AddProducto" component={AddProducto} />
                <Route path = "/SignUp" component = {SignUp}></Route>
              </Switch>
            </BrowserRouter>
        );
    }
}