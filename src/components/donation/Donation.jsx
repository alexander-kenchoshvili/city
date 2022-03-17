import React from 'react';
import './Donation.css';
import {Link, useLocation} from 'react-router-dom';

function Donation() {
    const location = useLocation()
  return (
    <div className='donation-header'>
        <div className='inner-container'>
            <div className='donation-items'>
                <div className='donation-header-items'>
                    <ul>
                        <li>
                            <Link className={location.pathname==='/donationPage'? 'donation-list active':'donation-list' }  to='/donationPage' >ფიზიკური პირი</Link>
                        </li>
                        <li>
                            <Link className={location.pathname==='/donationPage/organisation'? 'donation-list active':'donation-list' } to='/donationPage/organisation' >ორგანიზაცია</Link>
                        </li>
                    </ul>
                </div>
                <div className='checkbox'>
                    <input type="checkbox"/>
                    <span>მსურს დავრჩე ანონიმურად</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Donation