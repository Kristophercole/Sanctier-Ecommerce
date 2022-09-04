import React, { useState } from 'react';
import { useStateContext } from '../context/StateContext';

const Hamburger = () => {
  const { setShowMenu, setMenuIsOpen, menuIsOpen } = useStateContext();
  return (
    <div>
      <div className='hamburger-menu'>
        <input
          id='menu__toggle'
          type='checkbox'
          checked={menuIsOpen}
          onChange={() => {
            setShowMenu((current) => !current);
            setMenuIsOpen((current) => !current);
          }}
        />
        <label className='menu__btn' htmlFor='menu__toggle'>
          <span></span>
        </label>
      </div>
    </div>
  );
};

export default Hamburger;
