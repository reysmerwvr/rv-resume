import React from 'react';
import { Nav, Image, Button } from 'react-bootstrap';
import '../assets/sass/resume.scss';

function Navigation() {
    return (
        <Nav
            className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" 
            id="sideNav"
        >
            <Nav.Link 
                className="navbar-brand js-scroll-trigger" 
                href="#page-top"
            >
                <span className="d-block d-lg-none">Reysmer Valle</span>
                <span className="d-none d-lg-block">
                    <Image 
                        src="images/profile.jpg"
                        alt="" 
                        className="img-fluid img-profile rounded-circle mx-auto mb-2" 
                    />
                </span>
            </Nav.Link>
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
                        <Nav.Link className="nav-link js-scroll-trigger" href="#about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="nav-item">
                        <Nav.Link className="nav-link js-scroll-trigger" href="#experience">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="nav-item">
                        <Nav.Link className="nav-link js-scroll-trigger" href="#education">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="nav-item">
                        <Nav.Link className="nav-link js-scroll-trigger" href="#skills">Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="nav-item">
                        <Nav.Link className="nav-link js-scroll-trigger" href="#interests">Interests</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="nav-item">
                        <Nav.Link className="nav-link js-scroll-trigger" href="#awards">Awards</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </Nav>
    );
}

export default Navigation;