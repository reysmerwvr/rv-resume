import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Skills() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <FontAwesomeIcon icon={['fab', 'html5']} />
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon icon={['fab', 'css3']} />
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon icon={['fab', 'js-square']} />
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon icon={['fab', 'php']} />
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon icon={['fab', 'react']} />
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon icon={['fab', 'node-js']} />
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon icon={['fab', 'sass']} />
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon icon={['fab', 'less']} />
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon icon={['fab', 'gulp']} />
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon icon={['fab', 'grunt']} />
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon icon={['fab', 'npm']} />
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon icon={['fab', 'apple']} />
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon icon={['fab', 'app-store-ios']} />
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon icon={['fab', 'aws']} />
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <FontAwesomeIcon icon={faCheck} className="fa-li" />
              Mobile and Web Development
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="fa-li" />
              Design Patterns
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="fa-li" />
              Mobile-First, Responsive Design
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="fa-li" />
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="fa-li" />
              Cross Functional Teams
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="fa-li" />
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>
    )
}

export default Skills;