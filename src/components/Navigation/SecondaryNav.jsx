import React from 'react'
import SecondaryNavLogo from '../../componentLogos/SecondaryNavLogo';
import './SecondaryNav.css';
import {Link} from 'react-router-dom';
import {MenuItems} from '../MenuItems';
import DonationCard from '../../componentLogos/DonationCard';
import ProfileLogo from '../../componentLogos/ProfileLogo';



function SecondaryNav() {
    
  return (
     
    <div className='secondary-nav'>
        <div className='nav-container'>
            <div className='nav-items'>
                <div className='secondary-nav-logo'>
                    <Link to='/'> <SecondaryNavLogo /> </Link>
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
    </div>
 
  
  )
}

export default SecondaryNav