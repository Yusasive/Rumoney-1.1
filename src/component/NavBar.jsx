import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
    let Links =[
        {name:"Students",link:"/"},
        {name:"Hire Talents",link:"/hire-talents"},
        {name:"Courses",link:"/courses"},
        {name:"About Us",link:"/about"},
        {name:"Blog",link:"https://blog.rumoney.digital"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className=' text-2xl cursor-pointer flex items-center gap-1'>
                <Link to="/"><span><img src={logo} alt="Rumoney" loading="lazy" /></span></Link>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to={link.link} className='text-gray-800 hover:text-rumoney50 duration-500'>{link.name}</Link>
                    </li>))
                }
               
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default NavBar;
