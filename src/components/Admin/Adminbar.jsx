import {useState,useEffect} from 'react';
import './Adminbar.css';
import {Link} from 'react-router-dom';

function Adminbar() {

  return (
    <div className='admin-bar'>
        <div className='admin-content'>
            <span>ადმინის პანელი</span>
            <ul className='bar-wrapper' > 
                <li>
                    <Link to='/admin' >სპექტაკლები</Link>
                </li>
                <li>
                    <Link to='/admin/myevents'>ივენთები</Link>
                </li>
                <li>
                    <Link to='/admin/mynews'>სიახლეები</Link>
                </li>
                <li>
                    <Link to='/admin/myteam'>დასის წევრები</Link>
                </li>
                <li>
                    <Link to='/admin/aboutus'>ჩვენს შესახებ</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Adminbar