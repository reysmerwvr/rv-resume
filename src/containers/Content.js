import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'
import Container from 'react-bootstrap/Container'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Interests from '../components/Interests'
import Awards from '../components/Awards'

function Content() {
  return (
    <Container fluid className="p-0">
      <ScrollAnimation animateIn="wobble" initiallyVisible>
        <About />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        <Education />
        <hr className="m-0" />
        <Skills />
        <hr className="m-0" />
        <Interests />
        <hr className="m-0" />
        <Awards />
      </ScrollAnimation>
    </Container>
  )
}

export default Content
