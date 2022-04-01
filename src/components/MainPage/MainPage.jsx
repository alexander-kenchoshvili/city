import {useState} from 'react';
import './MainPage.css';
import {Link} from 'react-router-dom';
import marj from '../../assets/images/marj.jpg';
import teamPhoto from '../../assets/images/ss.JPG';
import Volume from '../../assets/images/volume-high.svg';
import Language from '../../assets/images/Language.svg';
import Arrow from '../../assets/images/arrow-right.svg';
import FacebookLogo from '../../componentLogos/FacebookLogo';
import InstagramLogo from '../../componentLogos/InstagramLogo';
import Georgia from '../../assets/images/georgia.png';
import VolumeMute from '../../assets/images/Volume disable.svg';


function MainPage() {
    const [flag, setFlag] = useState(false);
    const handleFlag = ()=>setFlag(!flag);
    const [voice, setVoice] =useState(false);
    const handleVoice = ()=>setVoice(!voice);
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
                    <div className='voice-changer'onClick={handleVoice}>
                        {voice?  <img src={VolumeMute} alt="volume" /> :<img src={Volume} alt="volume" />}
                    </div>
                    <div className='language-changer' onClick={handleFlag} >
                    {flag? <img src={Georgia} alt="georgia" /> : <img src={Language} alt="language" /> }
                    </div>
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