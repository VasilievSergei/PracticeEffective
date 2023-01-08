import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={classes.toolbar}>
      <img src="/marvel_logo.svg" alt="marvel" className={classes.logo} />

      <nav className={classes.tollbarBottoms}>
        <NavLink
          to="/characters"
          className={({ isActive }) =>
            isActive ? classes.link_current : classes.link
          }
        >
          Characters
        </NavLink>
        <NavLink
          to="/comics"
          className={({ isActive }) =>
            isActive ? classes.link_current : classes.link
          }
        >
          Comics
        </NavLink>
        <NavLink
          to="/series"
          className={({ isActive }) =>
            isActive ? classes.link_current : classes.link
          }
        >
          Series
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
