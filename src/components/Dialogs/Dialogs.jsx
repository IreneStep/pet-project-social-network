import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = () => {
  return(
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>
        <div className={`${style.dialog} ${style.active}`}>
        <NavLink to='/dialogs/1'>
          Iryna
        </NavLink>
        </div>
        <div className={style.dialog}>
        <NavLink to='/dialogs/2'>
          Dima
        </NavLink>
        </div>
        <div className={style.dialog}>
        <NavLink to='/dialogs/3'>
          Evan
        </NavLink>
        </div>
        <div className={style.dialog}>
        <NavLink to='/dialogs/4'>
          Tanya
        </NavLink>
        </div>
      </div>
      <div className='messages'>
        <div className={style.dialog}>
          Hello
        </div>
        <div className={style.dialog}>
          How was your day?
        </div>
        <div className={style.dialog}>
          Simple the best
        </div>
      </div>
    </div>
  );
}

export default Dialogs;