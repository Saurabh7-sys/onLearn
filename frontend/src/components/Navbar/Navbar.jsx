import React, { useEffect, useState } from 'react'
import Logo from './assets/Frame 237646.png'
import mobileLogo from './assets/mobileLogo.png'
import { NavLink, useNavigate } from 'react-router-dom'

import style from './navbar.module.css'

const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    {
      id: 1,
      label: (<>Home</>),
      link: "/"
    },
    {
      id: 2,
      label: (<>Careers</>),
      link: "/careers"
    },
    {
      id: 3,
      label: (<>Blog</>),
      link: "/blog"
    },
    {
      id: 4,
      label: (<>About&nbsp;Us</>),
      link: "/aboutUs"
    },
  ]

  const navigate = useNavigate();
  return (
    <>

      <nav className={`${style.mainNav} ${isScrolled ? style.scrolled : ""}`}>
        <div className={style.logo}>
          <img src={Logo} alt="logo" onClick={() => navigate('/')} />
        </div>
        <div className={style.navLinks}>
          <ul>
            {
              navLinks.map(e => (
                <li key={e.id}><NavLink
                  to={e.link}
                  className={({ isActive }) =>
                    isActive ? style.active : style.notActive
                  }>{e.label}</NavLink></li>
              ))
            }
          </ul>
        </div>
        <div className={style.login}>

          <div className={style.loginWrapper}>


            {
              isLoggedIn ? (<div className={style.DesktopProfile}>

              </div>) : (<>
                <button>Log&nbsp;in</button>
                <button>Sign&nbsp;up</button>
              </>)
            }
          </div>
        </div>
      </nav>

      <nav className={`${style.mobileNav} ${isScrolled ? style.scrolled : ""}`}>
        <div className={style.mobileNavWrapper}>
          <div className={style.logo}>
            <img src={mobileLogo} alt="logo" onClick={() => navigate('/')} />
          </div>

          <div className={style.user}>
            {
              isLoggedIn ? (<div className={style.Profile}>

              </div>) : (<div className={style.login}>
                <button>Log&nbsp;in</button>
                <button>Sign&nbsp;up</button>
              </div>)
            }


          </div>
        </div>
      </nav >
    </>

  )
}

export default Navbar
