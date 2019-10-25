import React from 'react';
import style from './Header.module.css';

const Header = () => {
  return(
    <div className={style.header}>
      <img src='http://pngimg.com/uploads/deadpool/deadpool_PNG88.png' alt='Logo' />
    </div>
  );
}

export default Header;