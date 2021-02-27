import React from 'react';
import {
  Container,
  colors,
  Typography,
} from '../atoms';

export const Promise = () => {
  return (
    <Container
      flex
      backgroundColor={colors.slate2}
      justifyContent="center"
      alignItems="center"
      padding="50px"
      height="auto"
      column
    >
      <Typography
        padding="20px 0"
        width="45%"
        textAlign="center"
        weight="100"
        size="md"
        color={colors.mist1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>
    </Container>
  )
}