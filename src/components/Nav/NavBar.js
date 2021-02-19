import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../../images/logo_black.png'

const NavBarContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  position: absolute;
  top: 0;
  -webkit-box-shadow: -3px 5px 15px -15px rgba(0,0,0,0.75);
  box-shadow: -3px 5px 15px -15px rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBarContent = styled.div`
  display: flex;
  font-family: "Lato";
  font-weight: 300;
  font-size: 15px;
  text-decoration: none;
  color: black;
  width: 50%;
  justify-content: space-between;
  align-items: center;
`;

export const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarContent>
        <Link>SHOP</Link>
        <Link>ABOUT</Link>
        <Link>
        <img width="21px" src={logo}/>
        </Link>
        <Link>VENDORS</Link>
        <Link>CART</Link>
      </NavBarContent>
    </NavBarContainer>
  )
}