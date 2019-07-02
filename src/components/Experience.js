import React from 'react';

function Experience() {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
          <div className="w-100">
            <h2 className="mb-5">Experience</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Senior Full Stack Developer</h3>
                <div className="subheading mb-3">Teravision Technologies</div>
                <p>
                    My job is to Build APIs for mobile apps, perform automated unit testing, 
                    design and build production-quality relational databases, configuration, 
                    and maintenance of development servers, design and create UI components with React, 
                    integration with AWS (EC2, RDS, S3), payment integration (Stripe, PayPal, In-App Purchases), 
                    automated deployments using Jenkins, continuous development with Docker. 
                    Examine the client's requirements and make estimates according to the task's level, 
                    participate in stand up meetings and sessions with onshore/offshore developers and Technical Leaders.
                </p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">September 2016 - Present</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Full Stack Freelance Developer</h3>
                <div className="subheading mb-3">Ragzza Argentina</div>
                <p>
                    I built a web site to manage sports competitions using AngularJS and Laravel Framework, 
                    I performed automated unit tests and also I designed UI components and layouts. 
                    I had the opportunity to make payment integration with Web Pay. 
                    I had to participate in daily stand up meetings and sessions with offshore developers and Technical Leaders.
                </p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">August 2016 - February 2017</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Full Stack Developer</h3>
                <div className="subheading mb-3">Kentron</div>
                <p>
                    I participated in many projects; I had to build web apps using Laravel Framework, 
                    Zend Framework, and NodeJS. I designed, built and maintained production quality databases 
                    (MySQL, PostgreSQL, SQL Server, Oracle, and MongoDB). 
                    I performed data large migrations with Pentaho Data Integration. 
                    I built web services using SOAP, XML, and WSDL. I had to participate in daily stand up meetings 
                    and sessions with clients, onshore developers and Technical Leaders. 
                </p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">May 2015 - September 2016</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
              <div className="resume-content">
                <h3 className="mb-0">Full Stack Developer</h3>
                <div className="subheading mb-3">Biodonto</div>
                <p>
                    I built a web system to manage medical resources orders. 
                    I used Yii Framework, jQuery, AJAX and JavaScript to make it. 
                    I had to build views, stored procedures, and triggers on MySQL related database. 
                    I had to participate in daily stand up meetings and sessions with onshore developers and Technical Leaders.
                </p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">August 2014 - April 2015</span>
              </div>
            </div>

          </div>
        </section>
    )
}

export default Experience;