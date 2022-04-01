import React from 'react';
import './EventDetail.css';
import eventPhoto from '../../assets/images/art.png';
import {Link} from 'react-router-dom';
import Message from '../../componentLogos/Message';

function EventDetail() {
  return (
    <div className='event-detail'>
        <div className="inner-container">
            <div className="event-detail-items">
                <div className="row">
                    {events.map((element,index)=>{
                        return (
                            <div className="col-xl-12">
                            <div className="event-detail-frame">
                                <h2 className='event-name' >ივენთის დასახელება</h2>
                                <div className='event-detail-img'>
                                    <img src={eventPhoto} alt="event" />
                                </div>
                                <div className='event-table'>
                                    <div className='event-left'>
                                        <div className='starting-time'>
                                            <h3>{element.startTitle}</h3>
                                            <span>{element.startingTime}</span>
                                        </div>
                                        <div className='event-duration'>
                                            <h3>{element.durationTitle}</h3>
                                            <span>{element.duration}</span>
                                        </div>
                                    </div>
                                    <Link to='#'>
                                        <span className='ticket' >ბილეთის ყიდვა </span>
                                        <span className='ticket-price'>50₾</span>
                                        
                                    </Link>
                                </div>
                                <div className='event-detail-text'>
                                    <div className='event-detail-title'>
                                        <Message/> <h3>ივენთის შესახებ</h3>
                                    </div>
                                    <p>{element.detailText}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
const events = [
    {
        name:'დანაშაული და სასჯელი',
        genre:'დრამა',
        image:eventPhoto,
        startTitle:'დაწყების დრო',
        startingTime:'20:00',
        durationTitle:'ხანგრძლივობა',
        duration:'75 წუთი',
        genreTitle:'ჟანრი',
        detailText:'ორი ახალგაზრდა მამაკაცი მეტროს სავსე ვაგონში აღმოჩნდება. მგზავრებს მათთან ერთად ერთ სივრცეში ყოფნა ნამდვილ ჯოჯოხეთად ექცევათ - ორივე საშინლად ამცირებს მათ და ძალადობს. მაგრამ წინააღმდეგობის გაწევას ვერც ერთი მათგანი ბედავს, ვერც ერთი იცავს საკუთარ ღირსებას და ვერ ერთიანდება ბოროტების წინაღმდეგ. შიშით და დაუსჯელობით ისინი სრულ თავისუფლებას აძლევენ სისასტიკეს.'
    },
]

export default EventDetail