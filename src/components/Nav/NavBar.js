import React from 'react';
import styled from 'styled-components';
import { IoCart } from 'react-icons/io5';
import { colors } from '../atoms'
import LinkFade from '../TransitionLinks/LinkFade'
import logoWhite from '../../images/logo_white-lettering.png';
import logoBlack from '../../images/logo_black-lettering.png';

const NavBarContainer = styled.div`
  z-index: 1;
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  /* -webkit-box-shadow: -3px 5px 15px -15px rgba(0,0,0,0.75);
  box-shadow: -3px 5px 15px -15px rgba(0,0,0,0.5); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
`;

const NavBarContent = styled.div`
  display: flex;
  font-family: "Lato";
  font-weight: 400;
  font-size: 12px;
  text-decoration: none;
  color: ${p => p.dark ? "black" : colors.mist1};
  width: 30%;
  justify-content: space-between;
  align-items: center;
`;


export const NavBar = ({ dark }) => {
  const darkStyle = { color: `${dark ? "black" : colors.mist1}` };
  return (
    <NavBarContainer>
      <NavBarContent dark={dark}>
        <LinkFade
        url={'/'}
        effect="fade"
        length={2}>
          <img alt="" width="65px" src={dark ? logoBlack : logoWhite} />
        </LinkFade>
        <LinkFade
          style={darkStyle}
          url={'/about'}
          effect="fade"
          length={2}>
          SHOP
        </LinkFade>
        <LinkFade
          style={darkStyle}
          url={'/about'}
          effect="fade"
          length={2}>
          ABOUT
        </LinkFade>
        <LinkFade
          style={darkStyle}
          url={'/about'}
          effect="fade"
          length={2}>
          VENDORS
        </LinkFade>
      </NavBarContent>
      <IoCart size="21px" />
    </NavBarContainer>
  )
}