import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";


import logo from '../Images/logo.png'
import './Style.css'
import { navigation } from '../Constants/navigation';




const Header = () => {

  const location = useLocation()
  const removeSpace = location?.search?.slice(3)?.split('%20')?.join(" ")
  const [searchInput, setSearchInput] = useState(removeSpace)
  const navigate = useNavigate()
  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`)
    }
  }, [searchInput])

  const submitHandler = (event) => {
    event.preventDefault();
  }
  return (
    <header className='flex gap-5 items-center bg-slate-800 sm:h-20 h-16 fixed w-full opacity-90 z-30'>
      <Link to={"/"}>
        <img className='sm:w-[250px] w-[170px]' src={logo} />
      </Link>

      <nav className='flex gap-4'>
        {navigation.map((nav, index) => (
          <div key={index} className='text-white hidden lg:block'>
            <NavLink key={index} to={nav.href} className={({ isActive }) => `px-2 hover:text-slate-400 ${isActive && " text-blue-400"}`}>
              {nav.name}
            </NavLink>
          </div>
        ))}
      </nav>
      <div className='flex items-center gap-5 ml-auto lg:mr-10 mr-3'>
        <div>
          <form className='flex items-center' onSubmit={submitHandler}>
            <input type='text' placeholder='Search For Movies... ' className='pl-3 py-1 bg-transparent rounded-md outline-none text-white placeholder:text-white hidden lg:block' onChange={(event) => setSearchInput(event.target.value)} value={searchInput} />
            <button className='text-white text-2xl hidden lg:block'>
              <IoIosSearch />
            </button>
          </form>
        </div>
        <div className='text-blue-400 cursor-pointer active:scale-90 transition-all duration-100 text-3xl'>
          <FaUserCircle />
        </div>

      </div>
    </header>
  );
}

export default Header;
