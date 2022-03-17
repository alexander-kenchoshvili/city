import React from 'react';
import './MainPage.css';
import {Link} from 'react-router-dom';
import marj from '../../assets/images/marj.jpg';
import teamPhoto from '../../assets/images/ss.JPG';
import Volume from '../../assets/images/volume-high.svg';
import Language from '../../assets/images/Language.svg';
import CalendarLogo from '../../componentLogos/CalendarLogo';
import Arrow from '../../assets/images/arrow-right.svg';
import FacebookLogo from '../../componentLogos/FacebookLogo';
import InstagramLogo from '../../componentLogos/InstagramLogo'; 
import Navbar from '../Navigation/Navbar';

function MainPage() {
  return (
    <div className='main-page'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-12'>
                <div className='performance-frame'>
                <div className='arrow-frame'>
                    <img src={marj}  alt="marjanishvili"/>
                    <span>დანაშაული და სასჯელი</span>
                    
                </div>
                <div className='arrow-frame'>
                    <img src={teamPhoto} alt="team" />
                    <span>დანაშაული და სასჯელი</span>
                
                </div>
                <div className='arrow-frame'>
                    <img src={teamPhoto} alt="team" />
                    <span>დანაშაული და სასჯელი</span>
                
                </div>
                <div className='arrow-frame'>
                    <img src={teamPhoto} alt="team" />
                    <span>დანაშაული და სასჯელი</span>
                
                </div>
                <div className='arrow-frame'>
                    <img src={teamPhoto} alt="team" />
                    <span>დანაშაული და სასჯელი</span>
                
                </div>
                <div className='arrow-frame'>
                    <img src={teamPhoto} alt="team" />
                    <span>დანაშაული და სასჯელი</span>
                
                </div>
                <div className='arrow-frame'>
                    <img src={teamPhoto} alt="team" />
                    <span>დანაშაული და სასჯელი</span>
                
                </div>
                
                
            </div>
                </div>
            </div>
            <div className='devices'>
                <div className='voice-language'>
                    <img src={Volume} alt="volume" />
                    <img src={Language} alt="language" />
                </div>
                <div className='see-calendar'>
                    <Link to='#'> <CalendarLogo /> კალენდრის ნახვა</Link>
                </div>
                <div className='social-network'>
                    <span>გამოგვყევით</span>
                    <img className='social-arrow' src={Arrow} alt="arrow" />
                    <Link className='insta-logo' to='#'> 
                        <InstagramLogo/>
                     </Link>
                    <Link className='fb-logo' to='#'> 
                        <FacebookLogo/>
                     </Link>
                </div>
            </div>   
                   
        </div>
    </div>
  )
}

export default MainPage