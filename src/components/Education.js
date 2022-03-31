import * as React from 'react'
import uuid from 'react-uuid'

import data from '../data/data.json'

function Education() {
  const {
    education: { educations, title },
  } = data
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="education"
    >
      <div className="w-100">
        <h2 className="mb-5">{title}</h2>
        {educations.map((education) => (
          <div
            key={uuid()}
            className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div className="resume-content">
              <h3 className="mb-0">{education.institute}</h3>
              <div className="subheading mb-3">{education.degree}</div>
              <div>{education.description}</div>
              <p>{education.gpa}</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">{education.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
