import React from 'react'
import './Navbar.css';
import {MenuItems} from '../MenuItems';
import {Link} from 'react-router-dom';
import MainLogo from '../../assets/images/mainLogo.svg';
import DonationCard from '../../componentLogos/DonationCard';
import ProfileLogo from '../../componentLogos/ProfileLogo';
function Navbar() {
   
  return (
    <nav>
        <div className='container '>
            <div className='main-page-items'>
                <div className='main-logo'>
                    <img src={MainLogo} alt="main logo" />
                </div>
                <div className='navigation'>
                    <ul>
                        {MenuItems.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <Link to={item.url} className={item.cName}  >{item.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='enter-donation'>
                    <Link to='donationPage' className='donation'> <DonationCard/>  დონაცია</Link>
                    <Link to='EnterPage' className='enter' > <ProfileLogo/> შესვლა</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar