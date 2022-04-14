import React, { useEffect, useState } from 'react';
import './EventDetail.css';
import {Link} from 'react-router-dom';
import Message from '../../componentLogos/Message';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EventDetail() {
    const [eventDetail,setEvents]=useState(null);
    const {id} = useParams();

    useEffect(()=>{
        axios.get('http://apicity.cgroup.ge/api/event/' +id)
            .then(res=>{
               
                setEvents(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[id])
    if(!eventDetail) return <div>Loading...</div>
    const result = Object.values(eventDetail)
    console.log(result)
 


  return (
    <div className='event-detail'>
        <div className="inner-container">
            <div className="event-detail-items">
               
                <div className="row">
                    
                    {result.map((element,index)=>{
                        
                        return (
                            <div key={index}  className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="event-detail-frame">
                                <h2 className='event-name'>{element.title.ka}</h2>
                                <div className='event-detail-img'>
                                    <img src={`http://apicity.cgroup.ge/${element.images[2]}`} alt="event" />
                                </div>
                                 <div className='event-table'>
                                    <div className='event-left'>
                                        <div className='starting-time'>
                                            <h3>დაწყების დრო</h3>
                                            <span>{element.start_date}</span>
                                        </div>
                                        <div className='event-duration'>
                                            <h3>ხანგრძლივობა</h3>
                                            <span>{element.minutes} წუთი</span>
                                        </div>
                                    </div>
                                    <Link to='#'>
                                        <span className='ticket' >ბილეთის ყიდვა </span>
                                        <span className='ticket-price'>{element.ticket_price} ₾</span>
                                        
                                    </Link>
                                </div>
                                <div className='event-detail-text'>
                                    <div className='event-detail-title'>
                                        <Message/> <h3>ივენთის შესახებ</h3>
                                    </div>
                                    <p>{element.description.ka}</p>
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

export default EventDetail