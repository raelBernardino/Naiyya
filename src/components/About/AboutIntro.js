import React from 'react';
import styled from 'styled-components';
import {
  Container,
  colors,
  Typography,
  FadeIn
} from '../atoms';
import sample1 from "../../images/sample1.jpg";

const TextContainer = styled(Container)``;

export const AboutIntro = () => {
  return (
    <Container
      id="intro"
      height="auto">
      <Container
        flex
        height="auto"
        backgroundColor={colors.mist1}
        padding="15% 10% 10% 10%"
      >
        <TextContainer
          flex
          column
          height="100vh"
          padding="0 10% 0 0"
          width="auto"
          flexNumber="1.5"
        >
          <Typography
            size="lg"
            weight="400">
            Naiyya. We believe every life has value. We believe the world can change. We believe you care. We can make a difference. One life at a time. One purchase at a time.
          </Typography>
          <Typography
            size="md"
            weight="300"
            padding="15% 0 0 0">
            Together we can lift up those who need it most. Through our everyday purchases we can give someone a life changing opportunity.
          </Typography>
        </TextContainer>
        <FadeIn
          height="100vh"
          padding="0 0 0 10%"
          backgroundImage={sample1}
          width="auto"
          flexNumber="1"
        />
      </Container>
    </Container>
  )
}