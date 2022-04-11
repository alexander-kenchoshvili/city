import {useState} from 'react'
import SecondaryNavLogo from '../../componentLogos/SecondaryNavLogo';
import './SecondaryNav.css';
import {Link} from 'react-router-dom';
import {MenuItems} from '../MenuItems';
import DonationCard from '../../componentLogos/DonationCard';
import ProfileLogo from '../../componentLogos/ProfileLogo';
import Hamburger from '../../componentLogos/Hamburger';
import closeBtn from '../../assets/images/Mask Group 12.svg';
import LogoResp from '../../componentLogos/LogoResp';



function SecondaryNav() {
    const [sidebar, setSideBar] = useState(false);
    const showSideBar = ()=>setSideBar(!sidebar);
    const removeActive = () => setSideBar(false);
  return (
     
    <div className='secondary-nav'>
        <div className='nav-container'>
            <div className='nav-items'>
                <div className='secondary-nav-logo'>
                    <Link className='full-screen-logo' to='/'> <SecondaryNavLogo /> </Link>
                    <Link className='responsive-logo' to='/'> <LogoResp/></Link>
                </div>
                <div  onClick={showSideBar}  className='hamburger'>
                    <Hamburger/>
                </div>
                <ul className='nav-menu-items'>
                    {MenuItems.map((item,index)=>{
                        return (
                        <li key={index}>
                            <Link to={item.url} className={item.cName}  >{item.title}</Link>
                        </li>
                        )
                    })}
                </ul>
                <div className='enter-donation'>
                    <Link to='donationPage' className='donation'> <DonationCard/>  დონაცია</Link>
                    <Link to='EnterPage' className='enter' > <ProfileLogo/> შესვლა</Link>
                </div>
                <div onClick={removeActive} className={sidebar? 'responsive-menu active':'responsive-menu' }>
                <ul className='nav-menu-items-active'>
                    <li onClick={removeActive}  className='close-btn'>
                        <img src={closeBtn} alt="close" />
                    </li>
                    {MenuItems.map((item,index)=>{
                        return (
                        <li  onClick={removeActive}  key={index}>
                            <Link to={item.url} className={item.cName}  >{item.title}</Link>
                        </li>
                        )
                    })}
                     <div onClick={removeActive}  className='enter-donation'>
                        <Link to='donationPage' className='donation'> <DonationCard/>  დონაცია</Link>
                        <Link to='EnterPage' className='enter' > <ProfileLogo/> შესვლა</Link>
                    </div>
                </ul>
                </div>
            </div>
        </div>
    </div>
 
  
  )
}

export default SecondaryNav