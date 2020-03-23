import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../data/data.json";

function About() {
  const { about } = data;
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0 heading">
          {about.firstName}
          <span className="text-primary">{about.lastName}</span>
        </h1>
        <div className="subheading mb-5">
          {about.address} · {about.phoneNumber} ·
          <a href={`mailto:${about.email}`}>{about.email}</a>
        </div>
        <p className="lead mb-5">{about.bio}</p>
        <div className="social-icons">
          {Object.keys(about.social).map(key => (
            <a
              key={key}
              href={about.social[key]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", key]} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
