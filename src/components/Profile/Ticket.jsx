import React from 'react';
import './Ticket.css';
import Spectacle from '../../assets/images/spectacle1.png';
import Qr from '../../assets/images/qr.png';

function Ticket() {
  return (
    <div className='ticket-section' >
      <div className='ticket-items'>
        <div className='ticket-content'>
          <div className='spectacle-photo'>
            <img src={Spectacle} alt="ticket" />
          </div>
          <div className='ticket-info'>
            <div className='ticket-caption'>
              <h2>ინციდენტი მეტროში</h2>
              <h3>თარიღი: <span>26 თებერვალი</span> </h3>
              <h3>დაწყების დრო: <span>20:00</span> </h3>
              <h3>ხანგრძლივობა: <span>75 წუთი</span> </h3>
              <h3>რაოდენობა: <span>2</span> </h3>
              <h3>თანხა: <span>51 ლარი</span> </h3>
            </div>
            <div className='qr-code'>
              <img src={Qr} alt="qr-code" />
            </div>
          </div>
        </div>
        <div className='ticket-content'>
          <div className='spectacle-photo'>
            <img src={Spectacle} alt="ticket" />
          </div>
          <div className='ticket-info'>
            <div className='ticket-caption'>
              <h2>ინციდენტი მეტროში</h2>
              <h3>თარიღი: <span>26 თებერვალი</span> </h3>
              <h3>დაწყების დრო: <span>20:00</span> </h3>
              <h3>ხანგრძლივობა: <span>75 წუთი</span> </h3>
              <h3>რაოდენობა: <span>2</span> </h3>
              <h3>თანხა: <span>51 ლარი</span> </h3>
            </div>
            <div className='qr-code'>
              <img src={Qr} alt="qr-code" />
            </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Ticket