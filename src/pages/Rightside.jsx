import React from 'react';
import { PiTrash } from "react-icons/pi";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegEye, FaUserCheck } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { LuUsers2 } from "react-icons/lu";
import './Rightside.css'

const Rightside = () => {
    const applicant = [

        {
            id: 1,
            icon: <LuUsers2 />,
            name: "Applicants",
            value: "400"
        },
        {
            id: 2,
            icon: <FaUserCheck />,
            name: "Matches",
            value: "100"
        },
        {
            id: 3,
            icon: <FiMessageSquare />,
            name: "Messages",
            value: "147"
        },
        {
            id: 4,
            icon: <FaRegEye />,
            name: "View",
            value: "800"
        },
    ];
    return (
        <div className='rightside'>
            <div className="Button_container">
                <button className='Btn_delete'><span><PiTrash /></span> Delete</button>
                <button className='Btn_edit'><span><MdOutlineEdit /></span> Edit</button>
            </div>
            <div className='Applicant_data'>
                {applicant.map((item, index) => {
                    return (
                        <div id={item.id} className={`Aplicant_list ${index === applicant.length - 1 ? 'last-item' : ''}`} >
                            <p><span>{item.icon}</span> {item.name}</p>
                            <p className='applicant_form_num'>{item.value}</p>
                        </div>
                    )
                })

                }
            </div>
        </div >
    )
}

export default Rightside