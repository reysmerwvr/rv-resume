
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCertificate } from '@fortawesome/free-solid-svg-icons';

function Awards() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Courses</h2>
          <ul className="fa-ul mb-0">
            <li>
              <FontAwesomeIcon icon={faTrophy} className="fa-li text-warning" />
              Culture scholarship - Orfeón Luis Caballero Mejías
            </li>
            <li>
              <FontAwesomeIcon icon={faTrophy} className="fa-li text-warning" />
              Higher index of the specialty Systems Engineering
            </li>
            <li>
              <FontAwesomeIcon icon={faTrophy} className="fa-li text-warning" />
              Best internship project in programming area
            </li>
            <li>
              <FontAwesomeIcon icon={faTrophy} className="fa-li text-warning" />
              Best index of academic performance
            </li>
            <li>
              <FontAwesomeIcon icon={faCertificate} className="fa-li text-warning" />
              Design Patterns in Swift (Udemy)
            </li>
            <li>
              <FontAwesomeIcon icon={faCertificate} className="fa-li text-warning" />
              Developing iOS 11 Apps with Swift (Stanford University)
            </li>
            <li>
              <FontAwesomeIcon icon={faCertificate} className="fa-li text-warning" />
              English Course (CVA)
            </li>
            <li>
              <FontAwesomeIcon icon={faCertificate} className="fa-li text-warning" />
              JAVA EE (Bellinsoft)
            </li>
            <li>
              <FontAwesomeIcon icon={faCertificate} className="fa-li text-warning" />
              JAVA SE (Bellinsoft)
            </li>
            <li>
              <FontAwesomeIcon icon={faCertificate} className="fa-li text-warning" />
              JavaScript: Understanding the Weird Parts (Udemy)
            </li>
            <li>
              <FontAwesomeIcon icon={faCertificate} className="fa-li text-warning" />
              Learn and understand NodeJS (Udemy)
            </li>
            <li>
              <FontAwesomeIcon icon={faCertificate} className="fa-li text-warning" />
              The Complete React Native and Redux Course (Udemy)
            </li>
          </ul>
        </div>
      </section>
    )
}

export default Awards;