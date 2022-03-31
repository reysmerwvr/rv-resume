import * as React from 'react'
import uuid from 'react-uuid'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faCertificate } from '@fortawesome/free-solid-svg-icons'

import data from '../data/data.json'

function Awards() {
  const {
    awards: { title, awards, courses },
  } = data
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="awards"
    >
      <div className="w-100">
        <h2 className="mb-5">{title}</h2>
        <ul className="fa-ul mb-0">
          {awards.map((award) => (
            <li key={uuid()}>
              <FontAwesomeIcon icon={faTrophy} className="fa-li text-warning" />
              {award}
            </li>
          ))}
          {courses.map((course) => (
            <li key={uuid()}>
              <FontAwesomeIcon
                icon={faCertificate}
                className="fa-li text-warning"
              />
              {course}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Awards
