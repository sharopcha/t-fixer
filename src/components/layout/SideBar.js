import React from 'react';

const SideBar = () => {
  return (
    <div className='sidebar-container'>
      <div className='logo'>
        <img src='./img/logo.svg' alt='' />
      </div>

      <div className='menu'>
        <div className='menu-item'>
          <i class='fa-solid fa-gauge'></i>
        </div>
        <div className='menu-item'>
          <i class='fa-solid fa-calendar-days'></i>
        </div>
        <div className='menu-item'>
          <i class='fa-solid fa-list-check'></i>
        </div>
        <div className='menu-item'>
          <i class='fa-solid fa-graduation-cap'></i>
        </div>
        <div className='menu-item'>
          <i class='fa-solid fa-building-columns'></i>
        </div>
        <div className='menu-item'>
          <i class='fa-solid fa-magnifying-glass'></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
