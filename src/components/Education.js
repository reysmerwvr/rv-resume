import React from 'react';

function Education() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">UCAB</h3>
              <div className="subheading mb-3">Master of Computer Applications (MCA)</div>
              <div>Computer Science - Specialization: Information Systems</div>
              <p>Current GPA: 17/20</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2015 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">UNEXPO</h3>
              <div className="subheading mb-3">BEng., System Engineering</div>
              <div>First class with distinction</div>
              <p>GPA: 7.31/9</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2008 - October 2014</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Colegio Ave María</h3>
              <div className="subheading mb-3">BSc., Bachelor of Science</div>
              <div>Specialization: Science</div>
              <p>GPA: 16/20</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2003 - July 2008</span>
            </div>
          </div>

        </div>
      </section>
    )
}

export default Education;