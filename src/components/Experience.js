import * as React from 'react'
import uuid from 'react-uuid'

import data from '../data/data.json'

function Experience() {
  const {
    experience: { experiences },
  } = data
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>
        {experiences.map((experience) => (
          <div
            key={uuid()}
            className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div className="resume-content">
              <h3 className="mb-0">{experience.position}</h3>
              <div className="subheading mb-3">{experience.company}</div>
              <p>{experience.description}</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">{experience.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
