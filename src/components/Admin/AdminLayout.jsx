import React from 'react'
import Adminbar from './Adminbar';
import {Outlet} from 'react-router-dom';
import './AdminLayout.css';

function AdminLayout() {
  return (
    <div className='admin-layout' >
        <div className='inner-container'>
            <div className='admin-items'>
                <Adminbar/>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default AdminLayout