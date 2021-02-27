import React from 'react';
import styled from 'styled-components';
import { Container } from '../atoms'
import letterLogo from '../../images/logo_tagline-mist.png';
import landingImage from '../../images/landing.jpg';
import lineart from '../../images/lineart_s1.png';

const LogoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 8%;
  box-sizing: border-box;
`;

export const Landing = () => {
  return (
    <Container
      width="100%"
      height="100vh"
      flex
      justifyContent="center"
      alignItems="center"
      backgroundImage={landingImage}
      position="center"
    >
      <LogoContainer>
        <img alt="" src={letterLogo} width="525px" />
      </LogoContainer>
      <img alt="" src={lineart} width="50%" />
    </Container>
  )
}