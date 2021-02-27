import React from "react"
import {
  Container,
  NavBar,
  AboutLanding,
  AboutIntro,
  AboutValue,
  AboutVendors,
  Footer
} from '../components';

const AboutPage = () => {

  return (
    <Container backgroundColor="#fff" width="100%">
      <NavBar />
      <AboutLanding />
      <AboutIntro />
      <AboutValue />
      <AboutVendors />
      <Footer />
    </Container>
  )
}

export default AboutPage