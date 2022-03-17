import React from 'react';
import './Registration.css';
import {Link} from 'react-router-dom';
import Google from '../../componentLogos/Google';
import FbEnter from '../../componentLogos/FbEnter';
import Footer from '../Footer/Footer';

function Registration() {
  return (
    <div className='wrapper'>
        <div className='registration-section'>
            <div className='enter-frame'>
                <div className='enter-header'>რეგისტრაცია</div>
                <form>
                    <div className='enter-inputs'>
                        <div className='mail-to-enter'>
                            <label>ელ-ფოსტა</label>
                            <input type="email" placeholder='შეიყვანეთ ელ-ფოსტა' />
                        </div> 
                        <div className='password'>
                            <label>პაროლი</label> 
                            <input type="password" placeholder='********' />   
                        </div>
                        <div className='password'>
                            <label>გაიმეორე პაროლი</label> 
                            <input type="password" placeholder='********' />   
                        </div>
                        <button className='enter-btn' >შესვლა</button>
                    </div>
                    <div className='enter-with-social'>
                        <button className='google-btn'>
                            <Google/>    Google-ით შესვლა
                        </button> 
                        <button className='fb-btn'>
                            <FbEnter/> Facebook-ით შესვლა    
                        </button> 
                        <div className='register-link'>
                            უკვე დარეგისტრირებული ხართ? <Link to='/EnterPage'>დააჭირე აქ</Link>    
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Registration