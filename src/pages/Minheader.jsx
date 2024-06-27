import React, { useState, useEffect } from 'react'
import { MdCardTravel } from "react-icons/md";
import { FaRegMessage, FaRegBell } from "react-icons/fa6";
import { PiHandCoinsDuotone } from "react-icons/pi";
import './Minheader.css'

const Minheader = () => {
    const [activeIndex, setActiveIndex] = useState();
    const buttons = [
        {
            id: 1,
            icon: <MdCardTravel />,
            btn: "job",
            live: <span></span>
        },
        {
            id: 2,
            icon: <FaRegMessage />,
            btn: "Message",
            live: <span className='live'></span>
        },
        {
            id: 3,
            icon: <PiHandCoinsDuotone />,
            btn: "payments",
            live: <span></span>
        },
    ];

    useEffect(() => {
        // Find the index of the button with id === 1
        const initialActiveIndex = buttons.findIndex(item => item.id === 1);
        if (initialActiveIndex !== -1) {
            setActiveIndex(initialActiveIndex);
        }
    }, []);
    return (
        <div>
            <nav className="min_header">
                <div className='logo_icon'>Logo</div>

                <div className="button-container">
                    {buttons.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveIndex(index)}
                            className={`btn ${activeIndex === index ? 'active' : ''}`}
                        >
                            <span className='icon'>{item.icon}</span>{item.btn}
                            <span className="">{item.live}</span>
                        </button>
                    ))}
                </div>

                <div>
                    <span className='bell'><FaRegBell /> <span className="bell_span"></span></span>
                    <span><img src="/image/Frame 1.png" alt="" className="" /></span>
                </div>
            </nav>
        </div>
    )
}

export default Minheader