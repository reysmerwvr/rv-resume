import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div className="w-100">
                <h1 className="mb-0">Reysmer
                    <span className="text-primary">Valle</span>
                </h1>
                <div className="subheading mb-5">Bogotá, CO 111211 · (350) 819-4126 ·
                <a href="mailto:reysmerwvr@gmail.com">reysmerwvr@gmail.com</a>
                </div>
                <p className="lead mb-5">
                Full Stack Developer, aspiring iOS Developer. Dynamic and enthusiastic with experience in systems development and troubleshooting. 
                Extensive knowledge of programming paradigms, software development methodologies, and programming languages. 
                Ability to resolve problems in complex and critical projects on time. 
                </p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/reysmer-valle-8919b9115/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                    <a href="https://github.com/reysmerwvr" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                    <a href="https://twitter.com/ValleReysmer" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                    <a href="https://www.facebook.com/ValleReysmer" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About;