import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './ProfileLayout.css';

function ProfileLayout() {
  return (
    <div className='side-wrap' >
      <div className='inner-container'>
        <div className='profile-items'>
          <Sidebar/>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default ProfileLayout