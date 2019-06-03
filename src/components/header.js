import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button'

export default class Header extends Component {

  state = {
    user_id: '0'
  }

  componentDidMount(){
    fetch('authentication/userId')
    .then(response => response.json())
    .then(user => this.setState({user_id: user.user_id}))
  }

  render() {
    if (this.state.user_id == '0'){
      return (
        <NavWrapper className = "nav navbar-expand-sm navbar-dark px-sm-5">
          
          
            <Link to={'/'}>
                <img src =  "/img/icon.png " alt = "store" className = "navbar-brand" height="69px"/>
            </Link>
            
           <ul className="navbar-nav ml-auto">
              <form className="form-inline ml-auto">
                <input className="form-control mr-sm-2 col-xs-4" type="search" placeholder="Productos" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
              </form>
          </ul>
          
          <ul className="navbar-nav ml-auto" Style="margin-top: 0.7rem">
            <li className="nav-item ">
              <Link to= '/SignUp'  className="nav-link ">
                  {this.state.user_id}Registrarse
              </Link>
            </li>
            <li className="nav-item">
              <Link to= '/LogIn'  className="nav-link  ">
                  Ingresar
              </Link>
            </li>
          </ul>
          
          
    
          <Link to = "/cart" className = "ml-auto">
              <ButtonContainer>
                  <span  className="mr-2">
                      <img src =  "/img/cart.png " alt = "cart" className = "fas fa-cart-plus" height="40px" />
                  </span>
                  Carrito
              </ButtonContainer>
          </Link>
        </NavWrapper>
      );
    }else{
      return(
        <NavWrapper className = "nav navbar-expand-sm navbar-dark px-sm-5">
          
          
            <Link to={'/'}>
                <img src =  "/img/icon.png " alt = "store" className = "navbar-brand" height="69px"/>
            </Link>
            
           <ul className="navbar-nav ml-auto">
              <form className="form-inline ml-auto">
                <input className="form-control mr-sm-2 col-xs-4" type="search" placeholder="Productos" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
              </form>
          </ul>
          
          <ul className="navbar-nav ml-auto" Style="margin-top: 0.7rem">
            <li className="nav-item ">
                <Link to= '/logout'  className="nav-link ">
                    {this.state.user_id}loguout
                </Link>
              </li>
              <li className="nav-item">
                <Link to= '/LogIn'  className="nav-link  ">
                    Ingresar
                </Link>
              </li>
              <li className="nav-item">
                <Link to= '/Compras'  className="nav-link  ">
                    Compras
                </Link>
              </li>
            
          </ul>
          
          
    
          <Link to = "/cart" className = "ml-auto">
              <ButtonContainer>
                  <span  className="mr-2">
                      <img src =  "/img/cart.png " alt = "cart" className = "fas fa-cart-plus" height="40px" />
                  </span>
                  Carrito
              </ButtonContainer>
          </Link>
        </NavWrapper>
      );
    }
    
  }
}

const NavWrapper = styled.nav`
    background: var(--mainWhite);
    .nav-link{
       color: green !important; 
       font-size: 1.3rem;
       //1rem 16px
       text-transform: capitalize;
    }
    
`