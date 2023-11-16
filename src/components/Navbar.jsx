import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, logotext } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-[#d1d7e1] sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo} // your logo comes here
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />

          {/* if you have text you want besides your logo it comes here.
          Otherwise delete this if you don't need it. */}
          <img
            src={logotext}
            alt="logo"
            className="sm:w-[150px] sm:h-[85px] w-[150px] h-[150px] -ml-[0.6rem] object-contain"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          <li className="text-[35px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links">
            <a href="https://www.linkedin.com/in/juliogoncalvess/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ color: 'black' }} />
            </a>
          </li>
          <li className="text-[35px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links">
            <a href="mailto:juliobeites@hotmail.com">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: 'black' }}/>
            </a>
          </li>
          <li className="text-[35px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links">
            <a href="https://github.com/juliogoncalves147">
              <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }}/>
            </a>
          </li>
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-[#d1d7e1] opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? 'menu-open' : 'menu-close'
                }`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <li className="text-[35px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links">
            <a href="https://www.linkedin.com/in/juliogoncalvess/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ color: 'black' }} />
            </a>
            <p style={{color: 'black'}}> Linkedin </p>
          </li>
          <li className="text-[35px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links">
            <a href="mailto:juliobeites@hotmail.com">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: 'black' }}/>
            </a>
            <p style={{color: 'black'}}> Email </p>
          </li>
          <li className="text-[35px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links">
            <a href="https://github.com/juliogoncalves147">
              <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }}/>
            </a>
            <p style={{color: 'black'}}> GitHub </p>
          </li>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;