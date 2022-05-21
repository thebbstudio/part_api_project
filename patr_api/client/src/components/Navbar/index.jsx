import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HttpService from '../../http/HttpService';
import cl from './Navbar.module.css';

function Navbar() {
  const [nav, setNav] = useState([]);
  const [burgerChecked, setBurgerCheched] = useState(false);
  const handleInput = (e) => {
    setBurgerCheched(e.target.checked);
  };

  async function getNavbar() {
    const http = await HttpService.getNavbar({ format: 'json' });
    setNav(http.data);
  }

  function addEventCloseBurger() {
    const list = document.querySelector(`.${cl.list}`);
    list.addEventListener('click', () => {
      setBurgerCheched(false);
    });
  }

  useEffect(() => {
    addEventCloseBurger();
    getNavbar();
  }, []);

  return (
    <nav className={cl.navbar}>
      <div className="container">
        <input
          id={cl.menuToggle}
          className={cl.displayNone}
          type="checkbox"
          onChange={handleInput}
          checked={burgerChecked}
        />
        <label className={`${cl.menuBtn} ${cl.displayNone}`} htmlFor={cl.menuToggle}>
          <span></span>
        </label>
        <ul className={cl.list}>
          {nav.map((el) => (

            <li key={el.title} className={cl.listItem}>
              <Link to={el.path}>
                {el.title.toUpperCase()}
              </Link>
            </li>

          ))}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
