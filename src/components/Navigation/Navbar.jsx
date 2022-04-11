import {useState} from 'react'
import './Navbar.css';
import {MenuItems} from '../MenuItems';
import {Link} from 'react-router-dom';
import MainLogo from '../../assets/images/mainLogo.svg';
import DonationCard from '../../componentLogos/DonationCard';
import ProfileLogo from '../../componentLogos/ProfileLogo';
import Hamburger from '../../componentLogos/Hamburger';
import closeBtn from '../../assets/images/Mask Group 12.svg';

function Navbar() {
   const [sidebar, setSideBar] = useState(false);
   const showSideBar = ()=>setSideBar(!sidebar);
   const removeActive = () => setSideBar(false);
  return (
    <nav>
        <div className='container '>
            <div className='main-page-items'>
                <div className='main-logo'>
                    <img src={MainLogo} alt="main logo" />
                </div>
                <div  onClick={showSideBar}  className='hamburger'>
                    <Hamburger />
                </div>
                <ul className='nav-menu-items' >
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
    </nav>
  )
}

export default Navbar