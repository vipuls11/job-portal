import React from 'react';
import Rightside from './Rightside';
import './Jobreview.css'
import SeniorProject from './SeniorProject';

const Jobreview = () => {
    return (
        <div className='jobreview'>
            <div className='job_profile'>
                <SeniorProject />
            </div>
            <div className='number_apllicant' >
                <Rightside />
            </div>
        </div>
    )
}

export default Jobreview