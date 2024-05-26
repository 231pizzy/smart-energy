import React from 'react';
import { FaBars, FaCog, FaHome, FaPoll } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function SideBar({ sideBar }) {
  return (
    <div className={`${sideBar ? "hidden" : "block"} lg:w-64 fixed h-full bg-slate-50 px-4 py-2 hidden lg:block`}>
      {/* <div className='flex justify-end'>
        <FaBars onClick={() => setSideBar(!sideBar)}/>
      </div> */}

      <div className='my-2 mb-4 flex flex-row items-center justify-between'>
        <img className="w-[91px] h-[35.3px] ml-16" alt="" src="/group-10466.svg" />
      </div>
      <hr />
      <ul className='mt-10 text-black font-bold list-none'>
        <li className='mb-10 rounded-md hover:shadow hover:bg-orange-600 py-1'>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `px-3 flex items-center ${isActive ? 'bg-orange-600 text-white rounded-md py-2' : 'text-black hover:text-white'}`}
          >
            <FaHome className='inline-block w-6 h-6 mr-8' />
            Dashboard
          </NavLink>
        </li>

        <li className='mb-10 rounded hover:shadow hover:bg-orange-600 py-2'>
          <NavLink
            to="/smart-devices"
            className={({ isActive }) => `px-3 flex items-center ${isActive ? 'bg-orange-600 text-white' : 'text-black hover:text-white'}`}
          >
            <FaPoll className='inline-block w-6 h-6 mr-8' />
            Smart Devices
          </NavLink>
        </li>

        <li className='mb-2 rounded hover:shadow hover:bg-orange-600 py-2'>
          <NavLink
            to="/settings"
            className={({ isActive }) => `px-3 flex items-center ${isActive ? 'bg-orange-600 text-white' : 'text-black hover:text-white'}`}
          >
            <FaCog className='inline-block w-6 h-6 mr-8' />
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
