import React from 'react';
import { Nav, Image, Button } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../assets/sass/resume.scss';

function Navigation() {
    return (
        <Nav
            className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" 
            id="sideNav"
        >
            <AnchorLink 
                className="navbar-brand js-scroll-trigger" 
                href="#page-top"
            >
                <span className="d-block d-lg-none">Reysmer Valle</span>
                <span className="d-none d-lg-block">
                    <Image 
                        src="images/profile.jpeg"
                        alt="" 
                        className="img-fluid img-profile rounded-circle mx-auto mb-2" 
                    />
                </span>
            </AnchorLink>
            <Button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </Button>
            <div 
                className="collapse navbar-collapse" 
                id="navbarSupportedContent"
            >
                <Nav className="navbar-nav" as="ul">
                    <Nav.Item as="li" className="nav-item">
                        <AnchorLink className="nav-link js-scroll-trigger" href="#about">About</AnchorLink>
                    </Nav.Item>
                    <Nav.Item as="li" className="nav-item">
                        <AnchorLink className="nav-link js-scroll-trigger" href="#experience">Experience</AnchorLink>
                    </Nav.Item>
                    <Nav.Item as="li" className="nav-item">
                        <AnchorLink className="nav-link js-scroll-trigger" href="#education">Education</AnchorLink>
                    </Nav.Item>
                    <Nav.Item as="li" className="nav-item">
                        <AnchorLink className="nav-link js-scroll-trigger" href="#skills">Skills</AnchorLink>
                    </Nav.Item>
                    <Nav.Item as="li" className="nav-item">
                        <AnchorLink className="nav-link js-scroll-trigger" href="#interests">Interests</AnchorLink>
                    </Nav.Item>
                    <Nav.Item as="li" className="nav-item">
                        <AnchorLink className="nav-link js-scroll-trigger" href="#awards">Awards</AnchorLink>
                    </Nav.Item>
                </Nav>
            </div>
        </Nav>
    );
}

export default Navigation;