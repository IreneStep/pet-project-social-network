import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
      </div>
      <div className={style.item}>
        <a>News</a>
      </div>
      <div className={style.item}>
        <a>Music</a>
      </div>
      <div className={style.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;