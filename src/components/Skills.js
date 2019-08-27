import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import data from '../data/data.json';

function Skills() {
  const { skills } = data;
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="w-100">
        <h2 className="mb-5">{skills.title}</h2>
        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline dev-icons">
          {skills.technicalSkills.map((skill, index) => (
            <li key={index} className="list-inline-item">
              <FontAwesomeIcon icon={['fab', skill]} />
            </li>
          ))}
        </ul>
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          {skills.workflowSkills.map((skill, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={faCheck} className="fa-li" />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
