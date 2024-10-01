import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg'; // Icons for Chat, Video, Voice
import { IoMenu } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import {BsQuestionSquareFill } from "react-icons/bs";




const Sidebar = ({ activeSession, setActiveSession }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sessions = [
    { name: 'Progress', icon: <GiProgression /> },
    { name: 'Questions', icon: <BsQuestionSquareFill /> },
    { name: 'Support', icon: <MdSupportAgent /> },
    
  ];

  return (
    <div
      className={`sidebar bg-gray-800 text-white h-[92vh] ${
        isExpanded ? 'w-[15vw]' : 'w-[3.5vw]'
      } p-4 transition-width duration-300 ease-in-out`}
    >
      <button
        className="text-white mb-4 focus:outline-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <IoMenu className='text-4xl' /> : <IoMenu className='text-4xl '/>}
      </button>

      <ul>
        {sessions.map((session) => (
          <li
            key={session.name}
            className={`flex items-center cursor-pointer p-2 rounded hover:bg-gray-700 ${
              activeSession === session.name ? 'bg-gray-600' : ''
            }`}
            onClick={() => setActiveSession(session.name)}
          >
            <span className="text-xl">{session.icon}</span>
            {isExpanded && <span className="ml-4">{session.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
