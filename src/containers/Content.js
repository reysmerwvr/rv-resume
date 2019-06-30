import React from 'react';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';

function Content() {
    return (
        <div className="container-fluid p-0">
            <About />
            <hr className="m-0" />
            <Experience />
            <hr class="m-0"></hr>
            <Education />
        </div>
    )
}

export default Content;