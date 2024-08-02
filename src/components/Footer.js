import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='flex flex-col justify-center items-center pb-20 pt-7 lg:pb-7 bg-black text-white gap-2'>
            <div>
                <span className='text-slate-400'>Created By:</span> Prashant Kumar
            </div>
            <div>
            <div className='flex gap-3 text-xl'>
                <a href='#' className='hover:text-red-500 hover:scale-110'><FaLinkedin /></a>
                <a href='https://github.com/Prashantkumar999' className='hover:text-red-500 hover:scale-110'><FaGithub /></a>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
