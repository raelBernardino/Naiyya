import React from 'react';
import {
  FadeIn,
  Typography
} from '../atoms'
import aboutLanding from '../../images/aboutLanding.jpg';

export const AboutLanding = () => {
  return (
    <FadeIn
      column
      width="100%"
      height="100vh"
      flex
      justifyContent="center"
      alignItems="center"
      backgroundImage={aboutLanding}
    >
      <Typography
        title
        size="xl">
        Naiyya
      </Typography>
      <Typography
        padding="20px 0"
        weight="200"
        size="md"
        textAlign="center"
        width="30%">
        Searching the world to find companies that are making a difference in the lives of people.
      </Typography>
    </FadeIn>
  )
}

{/* <AnchorLink to="/about#intro">
<Button>
  <Typography zindex="1">
    EXPLORE
  </Typography>
</Button>
</AnchorLink> */}