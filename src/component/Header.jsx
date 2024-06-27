import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const routes = [
        {
            path: "/job-preview",
            name: "Job Preview",
            live: <span className='livejob'></span>
        },
        {
            path: "/applicants",
            name: "Applicants",
            live: <span className='livejob'></span>
        },
        {
            path: "/match",
            name: "Match",
            live: <span className='livejobmatch'></span>
        },
        {
            path: "/message",
            name: "Messages",
            live: <span className='livejob'></span>
        },
    ];

    return (
        <div>
            <section className="routes">
                {routes.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className="link"
                        activeclassname="active"
                    >
                        <div className="icon">{item.name}
                            <span className="">{item.live}</span>
                        </div>
                    </NavLink>
                ))}
            </section>
        </div>
    );
};

export default Header;
