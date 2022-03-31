import * as React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import '../assets/sass/resume.scss'
import packageJson from '../../package.json'

function Navigation() {
  return (
    <Navbar
      bg="dark"
      expand="lg"
      className="bg-primary navbar-dark"
      fixed="top"
      id="sideNav"
    >
      <AnchorLink className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">{packageJson.author}</span>
        <span className="d-none d-lg-block">
          <Image
            src="https://avatars1.githubusercontent.com/u/9899860?s=400&v=4"
            alt="profile"
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
          />
        </span>
      </AnchorLink>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        data-toggle="collapse"
        data-target="#basic-navbar-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav" as="ul">
          <Nav.Item as="li" className="nav-item">
            <AnchorLink className="nav-link" href="#about">
              About
            </AnchorLink>
          </Nav.Item>
          <Nav.Item as="li" className="nav-item">
            <AnchorLink className="nav-link" href="#experience">
              Experience
            </AnchorLink>
          </Nav.Item>
          <Nav.Item as="li" className="nav-item">
            <AnchorLink className="nav-link" href="#education">
              Education
            </AnchorLink>
          </Nav.Item>
          <Nav.Item as="li" className="nav-item">
            <AnchorLink className="nav-link" href="#skills">
              Skills
            </AnchorLink>
          </Nav.Item>
          <Nav.Item as="li" className="nav-item">
            <AnchorLink className="nav-link" href="#interests">
              Interests
            </AnchorLink>
          </Nav.Item>
          <Nav.Item as="li" className="nav-item">
            <AnchorLink className="nav-link" href="#awards">
              Awards
            </AnchorLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
