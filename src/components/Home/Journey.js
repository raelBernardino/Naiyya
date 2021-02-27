import React from 'react';
import styled from 'styled-components';
import {
  Container,
  colors,
  Typography,
  FadeIn
} from '../atoms';
import lineart from '../../images/lineart_s2.png';

const JourneyCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
`;

const JourneyCardGraphic = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 360px;
  background-color: ${colors.slate3};
`;

const LineartImage = styled.img`
  position: absolute;
  top: 5%;
  width: 105%;
`;


export const Journey = () => {
  return (
    <Container
      flex
      backgroundColor={colors.slate2}
      justifyContent="center"
      alignItems="center"
      padding="50px"
      column
    >
      <LineartImage alt="" src={lineart} />
      <Typography
        title
        padding="25px 0"
        size="xxl"
        color="black"
        style={{ zIndex: "1" }}>
        Our Process
        </Typography>
      <FadeIn
        flex
        height="auto"
        justifyContent="space-around"
        padding="0 20px"
        zindex="1"
      >
        <JourneyCard>
          <JourneyCardGraphic />
          <Typography
            padding="20px 0"
            width="100%"
            weight="100"
            size="md"
            color={colors.slate4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </Typography>
        </JourneyCard>
        <JourneyCard>
          <JourneyCardGraphic />
          <Typography
            padding="20px 0"
            width="100%"
            weight="100"
            size="md"
            color={colors.slate4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </Typography>
        </JourneyCard>
        <JourneyCard>
          <JourneyCardGraphic />
          <Typography
            padding="20px 0"
            width="100%"
            weight="100"
            size="md"
            color={colors.slate4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </Typography>
        </JourneyCard>
      </FadeIn>
    </Container>
  )
}