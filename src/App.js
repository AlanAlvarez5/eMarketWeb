import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header';
import AddProducto from './components/addProducto';
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Cart from './components/Cart/Cart'
import Productos from './components/Productos'
import Details from './components/Details'
import Ejemplo from   './components/Ejemplo';
import Home from './components/Home';


export default class Class extends Component {

    render() {
        return (
            <React.Fragment>
              <Header />
              <Switch>
                <Route exact path ="/" component={Home} />
                <Route path ="/AddProducto" component={AddProducto} />
                <Route path = "/SignUp" component = {SignUp}></Route>
                <Route path = "/LogIn" component = {LogIn}></Route>
                <Route path = "/Cart" component = {Cart}></Route>
                <Route exact path = "/Productos" component = {Productos}></Route>
                
                <Route exact path = "/Productos/:producto_id"
                  render ={props => { let producto_id = props.location.pathname.replace( "/Productos/", ""); 
                  return <Details producto_id={producto_id} />;
                  }}
                />

                <Route path = "/Details" component = {Details}></Route>
                <Route path = "/Ejemplo" component = {Ejemplo}></Route>
                

              </Switch>
              </React.Fragment>
        );
    }
}