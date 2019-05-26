import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button'

export default class Header extends Component {
  render() {
    return (
      <NavWrapper className = "nav navbar-expand-sm navbar-dark px-sm-5">
        <Link to={'/'}>
            <img src =  "/img/icon.png " alt = "store" className = "navbar-brand" height="69px"/>
        </Link>
        
        <ul className = "navbar-nav align-items-center">
            <li className = "nav-item ml-5">
                <Link to = "/" className = "nav-link text-success">Productos</Link>
            </li>
        </ul>
        <Link to = "/SignUp" className = "ml-auto"> Registrarse </Link>
  
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

const NavWrapper = styled.nav`
    background: var(--mainWhite);
    .nav-link{
       color: green !important; 
       font-size: 1.3rem;
       //1rem 16px
       text-transform: capitalize;
    }
`