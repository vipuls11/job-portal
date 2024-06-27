import React from "react";
import './Skillsapplicant.css';

const Skillsapplicant = () => {
  const list = [
    {
      id: 1,
      image: "/image/image 1.png",
      name: "Figma",
    },
    {
      id: 2,
      image: "/image/image 2.png",
      name: "Adobe Illustrator",
    },
    ,
    {
      id: 3,
      image: "/image/image 6.png",
      name: "Adobe XD",
    },
  ];
  return (
    <div>
      <div className="skills">
        <div class="">
          <p className="para">Skills Required</p>
          <ul className="list_ui">
            {list.map((items, index) => {
              return (
                <li key={items.id} className="ui">
                  <img src={items.image} alt="" className="" style={{ width: '16px', height: '16px' }} />
                  {items.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div class="">
          <p className="para">Preferred Language</p>
          <h6>English</h6>
        </div>
        <div class="">
          <p className="para">Type</p>
          <h6>Full time</h6>
        </div>
        <div class="">
          <p className="para">Years of Experience</p>
          <h6>3+ Years of Experience</h6>
        </div>
      </div>
    </div>
  );
};

export default Skillsapplicant;
