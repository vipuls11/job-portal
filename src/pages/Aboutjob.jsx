import React from 'react';
import './Aboutjob.css'

function Aboutjob() {
    return (
        <div>
            <div className='About_job'>
                <p className='About_para'>About the job</p>
                <ol className='work_flow'>
                    <li>Handle the UI/UX research design</li>
                    <li>Work on researching on latest web applications designs & trends</li>
                    <li>Work on conceptualizing and visualizing</li>
                    <li>Work on creating graphics content and other graphic related works</li>
                </ol>
                <p>Benefit:</p>
                <ul className='work_flow_ul'>
                    <li>Health insurance</li>
                    <li>Provident Fund</li>
                </ul>
                <p>Schedule:</p>
                <ul className='work_flow_ul'>
                    <li>Day shift</li>
                </ul>
                <p>Supplemental pay types:</p>
                <ul className='work_flow_ul'>
                    <li>Performance bonus</li>
                    <li>Yearly bonus</li>
                </ul>
                <p>Work Location: In person</p>
            </div>
        </div>
    )
}

export default Aboutjob; 