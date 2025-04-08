import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHouse, faBookmark, faFilm } from '@fortawesome/free-solid-svg-icons'


function Header() {
  const linkClass = ({ isActive }) =>
    isActive ? 'text-[#1AB196]' : 'hover:text-[#1AB196] transition';
  const mobileLinkClass = ({ isActive }) =>
    isActive ? 'text-white bg-[#1AB196] w-12 h-12 flex items-center cursor-pointer border-2 border-[#1AB196] justify-center rounded-full transition duration-150 font-semibold text-lg text-center'


  : 'w-12 h-12 flex items-center cursor-pointer border-2 border-[#1AB196] bg-transparent justify-center rounded-full hover:bg-[#1AB196] transition duration-150 font-semibold text-[#1AB196] text-lg text-center hover:text-white';
  const navigate = useNavigate()

  function handleNavigateSearch() {
    navigate('/search')
  }


  return (
    <>
      <header className='px-10 py-5 fixed z-50 w-full backdrop-blur-sm'>
        <div className='container max-w-[1400px] mx-auto justify-between flex items-center'>
          <div >
            <NavLink  to='/'>
              <img src={Logo} alt="Logo" width={200} />
            </NavLink>
          </div>
          <nav className='flex items-center gap-12'>
            <ul className='md:flex hidden font-semibold items-center gap-12'>
              <li>
                <NavLink to='/' className={linkClass} end>
                  Asosiy
                </NavLink>
              </li>
              <li>
                <NavLink to='/saved' className={linkClass}>
                  Saqlanganlar
                </NavLink>
              </li>
              <li>
                <NavLink to='/mixed' className={linkClass}>
                  Aralash
                </NavLink>
              </li>
            </ul>
            <button onClick={handleNavigateSearch} className="w-10 h-10 flex items-center cursor-pointer border-2 border-[#1AB196] bg-transparent justify-center rounded-full hover:bg-[#1AB196] transition duration-150 font-semibold text-[#1AB196] hover:text-white">
              <FontAwesomeIcon icon={faSearch} />
            </button>

          </nav>
        </div>
      </header >

      <div className="mobile-header px-10 py-4 fixed z-50 md:hidden bottom-0 rounded-tl-xl rounded-tr-xl w-full bg-[#262626]">
        <div className="container  max-w-[1400px] mx-auto justify-between  flex items-center">
          <NavLink to='/' className={mobileLinkClass} end>
            <FontAwesomeIcon icon={faHouse} />
          </NavLink>
          <NavLink to='/saved' className={mobileLinkClass}>
            <FontAwesomeIcon icon={faBookmark} />
          </NavLink>
          <NavLink to='/mixed' className={mobileLinkClass}>
            <FontAwesomeIcon icon={faFilm} />
          </NavLink>

        </div>
      </div>
    </>
  )
}

export default Header
