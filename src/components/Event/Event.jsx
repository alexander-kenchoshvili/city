import {useState} from 'react';
import {Link} from 'react-router-dom';
import './Event.css';
import ArrowDown from '../../componentLogos/ArrowDown';
import ArrowUp from '../../componentLogos/ArrowUp';
import eventImage from '../../assets/images/19.png';
import Footer from '../Footer/Footer';

function Event() {

    const [dropdown,setDropdown] = useState(false);
    const handleDropdown =()=>setDropdown(!dropdown);
    const [open,setOpen]=useState(false);
    const handleOpen =()=>setOpen(!open);
    const [secondValue,setSecondValue]=useState('');
    const changeSecondValue = (e)=>setSecondValue(e.target.textContent);
    const [value,setValue] = useState('');
    const ChangeValue = (e)=>setValue(e.target.textContent);
    const removeActive = () => setDropdown(false);
    const removeSecondActive = ()=>setOpen(false);
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
                            <div className='col-xl-4'>
                                <input type="text" value={inputValue} onChange={changeInput} placeholder='სიტყვით ძიება...' />
                            </div>
                            <div className='col-xl-4'>
                                <div onFocus={handleDropdown}  className='select-field'>
                                    <input onBlur={removeActive}  onChange={ChangeValue}  className='select' type="text" placeholder='დღის სპექტაკლი' value={value} />                        
                                    {dropdown? <ArrowUp /> : <ArrowDown /> }
                                    <div  className={dropdown? 'selected active': 'selected'}  >
                                    <ul>
                                        {events.map((element,index)=>{
                                        return(
                                            <li   key={index}   onClick={ChangeValue}  >{element.name}</li>
                                        )
                                        })}
                                        
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4'>
                                <div onFocus={handleOpen}  className='select-field'>
                                    <input onBlur={removeSecondActive}  onChange={changeSecondValue}  className='select' type="text" placeholder='ჟანრი' value={secondValue} />                        
                                    {open? <ArrowUp /> : <ArrowDown /> }
                                    <div  className={open? 'selected active': 'selected'}  >
                                    <ul>
                                        {events.map((element,index)=>{
                                        return(
                                            <li   key={index}   onClick={changeSecondValue}  >{element.genre}</li>
                                        )
                                        })}
                                        
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='event-cards'>
                        <div className='event-card'>
                            <div className='row'>
                                {data.filter(item =>{
                                    return item.name.indexOf(inputValue) !== -1 &&
                                    item.name.indexOf(value) !== -1 &&
                                    item.genre.indexOf(secondValue) !== -1
                                }).map((element,index)=>{
                                    return (
                                        <div key={index} className='col-xl-6'>
                                            <div className='card-item'>
                                                <h2>{element.name}</h2>
                                                <Link to='#'>
                                                        <img src={element.image} alt="event" />
                                                </Link>
                                                <div className='event-table'>
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