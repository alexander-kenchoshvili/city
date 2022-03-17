import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EnterPage.css';
import Google from '../../componentLogos/Google';
import FbEnter from '../../componentLogos/FbEnter';
import Footer from '../Footer/Footer';
import {useNavigate} from 'react-router-dom';



function EnterPage() {
    const navigate = useNavigate();
    

  return (
    <div className='wrapper'>
        <div className='enter-section'>
                <div className='enter-frame'>
                    <div className='enter-header'>შესვლა</div>
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
                            <Link className='lost-password' to='#'>დაგავიწყდა პაროლი?</Link>
                            <button onClick={()=>{navigate("/dashboard")}}  className='enter-btn' >შესვლა</button>
                        </div>
                        <div className='enter-with-social'>
                            <button className='google-btn'>
                                <Google/>    Google-ით შესვლა
                            </button> 
                            <button className='fb-btn'>
                                <FbEnter/> Facebook-ით შესვლა    
                            </button> 
                            <div className='register-link'>
                                არ ხარ დარეგისტრირებული? <Link to='/Registration'>დააჭირე აქ</Link>    
                            </div>
                        </div>
                    </form>
                
            </div>
        </div>
    </div>
  )
}

export default EnterPage