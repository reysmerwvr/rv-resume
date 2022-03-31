import * as React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faDotCircle } from '@fortawesome/free-solid-svg-icons'

import data from '../data/data.json'

function Skills() {
  const {
    skills: { title, technicalSkills, extraSkills, workflowSkills },
  } = data
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="w-100">
        <h2 className="mb-5">{title}</h2>
        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline dev-icons">
          {technicalSkills.map((skill) => (
            <li key={skill} className="list-inline-item">
              <FontAwesomeIcon icon={['fab', skill]} className="fa-xs" />
            </li>
          ))}
        </ul>
        <div className="subheading mb-3">Other Skills</div>
        <ul className="fa-ul mb-3">
          {extraSkills.map((skill) => (
            <li key={skill} className="fa-list">
              <FontAwesomeIcon icon={faDotCircle} className="fa-li fa-xs" />
              {skill}
            </li>
          ))}
        </ul>
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          {workflowSkills.map((skill) => (
            <li key={skill} className="fa-list">
              <FontAwesomeIcon icon={faCheck} className="fa-li fa-xs" />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
