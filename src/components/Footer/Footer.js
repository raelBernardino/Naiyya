import React from 'react';
import styled from 'styled-components';
import { Container, Typography, colors } from '../atoms'
import logoWhiteLettering from '../../images/logo_white-lettering.png'

const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  text-align: center;
`;

const NavFooterContainer = styled.div`
  display: flex;
  flex: 3;
  justify-content: center;
  align-items: center;
`;

const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  flex: 1;
  height: 50%;
  justify-content: flex-start;
  > * {
    margin-bottom: 12px;
  }
`;

export const Footer = () => {
  return (
    <Container flex backgroundColor="#252323" height="500px" >
      <LogoContainer>
        <img src={logoWhiteLettering} alt="" width="200px" />
        <Typography margin="25px 0 0 0" width="200px" size="xs" color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Typography>
      </LogoContainer>
      <NavFooterContainer>
        <NavColumn>
          <Typography title size="lg" color={colors.mist1}>SHOP</Typography>
          <Typography weight="100" size="xs" color={colors.mist1}>Bath & Body</Typography>
          <Typography weight="100" size="xs" color={colors.mist1}>Jewelry</Typography>
          <Typography weight="100" size="xs" color={colors.mist1}>Homegoods</Typography>
        </NavColumn>
        <NavColumn>
          <Typography title size="lg" color={colors.mist1}>ABOUT</Typography>
          <Typography weight="100" size="xs" color={colors.mist1}>Story</Typography>
          <Typography weight="100" size="xs" color={colors.mist1}>Vendor Relationships</Typography>
        </NavColumn>
        <NavColumn>
          <Typography title size="lg" color={colors.mist1}>VENDORS</Typography>
          <Typography weight="100" size="xs" color={colors.mist1}>Business</Typography>
          <Typography weight="100" size="xs" color={colors.mist1}>Business</Typography>
          <Typography weight="100" size="xs" color={colors.mist1}>Business</Typography>
        </NavColumn>
        <NavColumn>
          <Typography title size="lg" color={colors.mist1}>CONTACT</Typography>
          <Typography weight="100" size="xs" color={colors.mist1}>NAIYYA@GMAIL.COM</Typography>
        </NavColumn>
      </NavFooterContainer>
    </Container>
  )
}