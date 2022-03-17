import React, { useState } from 'react';
import './Sidebar.css';
import {Link, useLocation} from 'react-router-dom';
function Sidebar() {
    const location = useLocation();
  return (
    <div className='sidebar'>
       
            <div className='side-content'>
                <ul  >
                    <li  >
                        <Link   className={location.pathname === '/dashboard' ? 'side-list active':'side list' }   to='/dashboard' >პროფილი</Link>
                    </li>
                    <li >
                        <Link className={location.pathname === '/dashboard/ticket'? 'side-list active':'side list'}  to='/dashboard/ticket'>ჩემი ბილეთები</Link>
                    </li>
                    <li >
                        <Link className='side-list '   to='/enterpage'>გასვლა</Link>
                    </li>
                </ul>
            </div>
        
    </div>
  )
}

export default Sidebar