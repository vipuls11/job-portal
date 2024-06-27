import React from 'react'
import './Seniorproject.css'
import { CiLocationOn } from "react-icons/ci";
import { FaCoins } from "react-icons/fa";

const SeniorProject = () => {
    return (<div className='Senior'>
        <div className='senior_develop' >
            <h1>Senior Product Designer</h1>
            <ul> <li className='post_day'>sposted 2 days ago</li></ul>
            <div className='open_dot'><span className='dots'></span> Open</div>
        </div>
        <div className="develop_details">
            <p className='develop_item'><span><CiLocationOn /></span> Dalaware, USA</p>
            <ul><li className='develop_item'><span><FaCoins /></span> $200-$400k</li></ul>
        </div>
    </div>
    )
}

export default SeniorProject