import {useState} from 'react';
import {Link} from 'react-router-dom';
import './Event.css';
import eventImage from '../../assets/images/19.png';

function Event() {
    const [inputValue, setInputValue] = useState('');
    const changeInput = (e)=>setInputValue(e.target.value);
    const [data,setData] = useState(events);


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
                                {data.filter(item =>{
                                    return item.name.indexOf(inputValue) !== -1 
                                }).map((element,index)=>{
                                    return (
                                    <div key={index} className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                                        <div className='card-item'>
                                            <h2>{element.name}</h2>
                                            <Link to='/eventDetail'>
                                                    <img src={element.image} alt="event" />
                                            </Link>
                                            <div className='event-table'>
                                                <div className='event-table-wrapper'>
                                                    <div className='starting-time'>
                                                        <h3>{element.startTitle}</h3>
                                                        <span>{element.startingTime}</span>
                                                    </div>
                                                    <div className='event-duration'>
                                                        <h3>{element.durationTitle}</h3>
                                                        <span>{element.duration}</span>
                                                    </div>
                                                    <div className='genre'>
                                                        <h3>{element.genreTitle}</h3>
                                                        <span>{element.genre}</span>
                                                    </div>
                                                </div>
                                                <Link to='#'>
                                                    <span className='ticket' >ბილეთის ყიდვა </span>
                                                    <span className='ticket-price'>50₾</span>
                                                    
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
const events = [
    {
        name:'დანაშაული და სასჯელი',
        genre:'დრამა',
        image:eventImage,
        startTitle:'დაწყების დრო',
        startingTime:'20:00',
        durationTitle:'ხანგრძლივობა',
        duration:'75 წუთი',
        genreTitle:'ჟანრი'
    },
    {
        name:'ჭირვეულის მორჯულება',
        genre:'კომედია',
        image:eventImage,
        startTitle:'დაწყების დრო',
        startingTime:'20:00',
        durationTitle:'ხანგრძლივობა',
        duration:'75 წუთი',
        genreTitle:'ჟანრი'
    },
    {
        name:'ქეთო და კოტე',
        genre:'მიუზიკლი',
        image:eventImage,
        startTitle:'დაწყების დრო',
        startingTime:'20:00',
        durationTitle:'ხანგრძლივობა',
        duration:'75 წუთი',
        genreTitle:'ჟანრი'
    },
    {
        name:'ჯინსების თაობა',
        genre:'ბიოგრაფიული',
        image:eventImage,
        startTitle:'დაწყების დრო',
        startingTime:'20:00',
        durationTitle:'ხანგრძლივობა',
        duration:'75 წუთი',
        genreTitle:'ჟანრი'
    },
    {
        name:'დარაბებს მიღმა გაზაფხულია',
        genre:'მელოდრამა',
        image:eventImage,
        startTitle:'დაწყების დრო',
        startingTime:'20:00',
        durationTitle:'ხანგრძლივობა',
        duration:'75 წუთი',
        genreTitle:'ჟანრი'
    },
  

]

export default Event