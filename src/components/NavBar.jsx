import React from "react";
import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


import{Link} from 'react-scroll'
import Logo from "../assets/Logo.png";
function NavBar() {
  const [nav, setNav] = useState(false);
  const handelClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2f353a] text-white">
      <div>
        <img
          src={Logo}
          alt="logo img"
          style={{ width: "70px", height: "70px" }}
        />
      </div>

      {/*menu*/}

      <ul className="hidden md:flex">
        <li><Link  to="home"  smooth={true} duration={500} >
          Home
        </Link></li>
        <li><Link  to="about"  smooth={true} duration={500} >
          About
        </Link></li>
        <li><Link  to="skills"  smooth={true} duration={500} >
          Skills
        </Link></li>
        <li><Link  to="projects"  smooth={true} duration={500} >
          Projects
        </Link></li>
        <li><Link  to="contact"  smooth={true} duration={500} >
          Contact-me
        </Link> </li>
      </ul>

      {/* Hamburger*/}
      <div className="md:hidden z-10" onClick={handelClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile menu */}
      <div
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#444b52] flex flex-col justify-center items-center text-center"
        }
      >
        <ul>
          <li className="py-6 text-4xl"><Link  to="home"  smooth={true} duration={500} onClick={handelClick} >
          Home
        </Link></li>
          <li className="py-6 text-4xl"><Link  to="about"  smooth={true} duration={500} onClick={handelClick}>
          About
        </Link></li>
          <li className="py-6 text-4xl"><Link  to="skills"  smooth={true} duration={500}onClick={handelClick} >
          Skills
        </Link></li>
          <li className="py-6 text-4xl"><Link  to="projects"  smooth={true} duration={500} onClick={handelClick}>
          Projects
        </Link></li>
          <li className="py-6 text-4xl"><Link  to="contact"  smooth={true} duration={500} onClick={handelClick}>
          Contact-me
        </Link> </li>
        </ul>
      </div>
      {/*Social menu */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='http://www.linkedin.com/in/duha-jilani'>
Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3e3e3e]'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://github.com/duhamjilani'>
Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href=' https://mail.google.com/mail/u/?authuser=duha.m.jilani@gmail.com'>
Email <  HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='/'>
Resume<BsFillPersonLinesFill  size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
