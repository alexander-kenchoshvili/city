import React from 'react';
import './MyProfile.css';

function MyProfile() {
  return (
    <div className='my-profile' >
      <div className='profile-inner'>
        <div className='profile-inputs'>
          <label>სახელი</label>
          <input type="text" placeholder='შეიყვანეთ სახელი'  />
        </div>
        <div className='profile-inputs'>
          <label>გვარი</label>
          <input type="text" placeholder='შეიყვანეთ გვარი'  />
        </div>
        <div className='profile-inputs'>
          <label>ელ ფოსტა</label>
          <input type="mail" placeholder='შეიყვანეთ ელ-ფოსტა'  />
        </div>
        <div className='profile-inputs'>
          <label>ნომერი</label>
          <input type="number" placeholder='+995' />
        </div>
        <button className='save-info-btn'>შენახვა</button>
      </div>
    </div>
  )
}

export default MyProfile