import React from "react"
import {
  Container,
  NavBar,
  Landing,
  Footer,
  Promise,
  Journey
} from '../components'

const IndexPage = () => (
  <Container backgroundColor="#fff" width="100%">
    <NavBar />
    <Landing />
    <Promise />
    <Journey />
    <Footer />
  </Container>
)

export default IndexPage
