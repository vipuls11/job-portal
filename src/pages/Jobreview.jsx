import React from 'react';
import Rightside from './Rightside';
import './Jobreview.css'
import SeniorProject from './SeniorProject';
import Skillsapplicant from './Skillsapplicant';
import Aboutjob from './Aboutjob';
import Atlassianjob from './Atlassianjob';

const Jobreview = () => {
    return (
        <div className='jobreview'>
            <div className='job_profile'>
                <SeniorProject />
                <Skillsapplicant />
                <Aboutjob />
                <Atlassianjob />
            </div>
            <div className='number_apllicant' >
                <Rightside />

            </div>
        </div>
    )
}

export default Jobreview