import * as React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import data from '../data/data.json'

function About() {
  const {
    about: { firstName, lastName, address, email, bio, social },
  } = data
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0 heading">
          {firstName}
          <span className="text-primary">{lastName}</span>
        </h1>
        <div className="subheading mb-5">
          {address} · <a href={`mailto:${email}`}>{email}</a>
        </div>
        <p className="lead mb-5">{bio}</p>
        <div className="social-icons">
          {Object.keys(social).map((key) => (
            <a
              key={key}
              href={social[key]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={key}
            >
              <FontAwesomeIcon icon={['fab', key]} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
