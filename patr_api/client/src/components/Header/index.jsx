import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Header.module.css';
import logo from '../../assets/img/logov2.png';
import WorkSchedules from './WorkSchedules';
import Contacts from './Contacts';

function Header() {
  return (
    <header className={cl.Header}>
      <div className="container">

        <div className={cl.content}>
          <Link to="/">
            <img className={cl.logoImg} src={logo} alt="logo" />
          </Link>
          <div className={cl.colHeader}>
            <h1 className={cl.nameOrganization}>
              ЦЕНТР ПАТРИОТИЧЕСКОГО
              <br />
              {' '}
              ВОСПИТАНИЯ ДЕТЕЙ И МОЛОДЕЖИ
            </h1>
            <Contacts cl={cl} />

          </div>
          <WorkSchedules />
        </div>
      </div>
    </header>
  );
}

export default Header;
