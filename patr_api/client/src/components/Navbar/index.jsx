import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cl from './Navbar.module.css';

function Navbar() {
  const [nav, setNav] = useState([
    { title: 'Главная', path: '/' },
    { title: 'Новости', path: '/news' },
    { title: 'Мероприятия', path: '/events' },
    { title: 'Сотрудники', path: '/staff' },
    { title: 'Парк', path: '/park' },
    { title: 'Документация', path: '/documentation' },
  ]);
  const [burgerChecked, setBurgerCheched] = useState(false);
  const handleInput = (e) => {
    setBurgerCheched(e.target.checked);
  };

  useEffect(() => {
    const list = document.querySelector(`.${cl.list}`);
    list.addEventListener('click', () => {
      setBurgerCheched(false);
    });
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
