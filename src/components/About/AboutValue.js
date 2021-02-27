import React from 'react';
import {
  Container,
  colors,
  Typography,
  FadeIn
} from '../atoms';

export const AboutValue = () => {
  return (
    <FadeIn
      flex
      backgroundColor={colors.mist1}
      justifyContent="center"
      alignItems="center"
      padding="50px"
      height="auto"
      column
    >
      <Typography
        title
        padding="20px 0"
        width="50%"
        textAlign="center"
        weight="100"
        size="lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </Typography>
      <Typography
        width="50%"
        textAlign="center"
        weight="100"
        size="sm">
        Lorem ipsum dolor sit amet.
      </Typography>
    </FadeIn>
  )
}