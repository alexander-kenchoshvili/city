import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Event.css';
import axios from 'axios';

function Event() {
    const [inputValue, setInputValue] = useState('');
    const changeInput = (e)=>setInputValue(e.target.value);
    const [event,setEvent] = useState(null);

    useEffect(()=>{
        axios.get('http://apicity.cgroup.ge/api/event')
            .then(res=>{
                setEvent(res.data.data)
            })
            .catch(err=>{
                console.log(err)
            })
        },[])
   console.log(event)
   if(!event) return <div> loading...</div>

  return (
    <div className='event-section'>
        <div className='inner-container'>
            <div className='event-items'>
                <form >
                <div className='input-frame'>
                    <div className='input-box'>
                        <div className='row'>
                            <div className='col-xl-12'>
                                <input type="text" value={inputValue} onChange={changeInput} placeholder='სიტყვით ძიება...' />
                            </div>
                        </div>
                    </div>
                    <div className='event-cards'>
                        <div className='event-card'>
                            <div className='row'>
                                {event.filter(item =>{
                                    return item.title.ka.indexOf(inputValue) !== -1 
                                }).map((element,index)=>{
                                    return (
                                    <div key={index} className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                                        <div className='card-item'>
                                            <h2>{element.title.ka}</h2>
                                            <div className='event-image-frame'>
                                                <Link to={`/eventDetail/${element.id}`}>
                                                        <img src={`http://apicity.cgroup.ge/${element.images[2]}`} alt="event" />
                                                </Link>
                                            </div>
                                            <div className='event-table'>
                                                <div className='event-table-wrapper'>
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
                                                    <span className='ticket-price'>{element.ticket_price}₾</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}


export default Event