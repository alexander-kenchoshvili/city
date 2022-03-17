
import './Performance.css';
import ArrowUp from '../../componentLogos/ArrowUp';
import ArrowDown from '../../componentLogos/ArrowDown';
import {useState} from 'react';
import eventImage from '../../assets/images/19.png';
import performancePhoto from '../../assets/images/train.png';
import {Link} from 'react-router-dom';
function Performance() {

  const [open,setOpen]=useState(false);
  const handleOpen =()=>setOpen(!open);
  const [secondValue,setSecondValue]=useState('');
  const removeSecondActive = ()=>setOpen(false);
  const changeSecondValue = (e)=>setSecondValue(e.target.textContent);
  const [inputValue, setInputValue] = useState('');
  const changeInput = (e)=>setInputValue(e.target.value);
  
  return (
    <div className='performance-section'>
        <div className='inner-container'>
            <div className='performance-items'>
              <div className='input-frame'>
                <div className='input-box'>
                    <div className='row'>
                      <div className='col-xl-3'>
                        <div className='all-performance-btn'>
                          <button>ყველა</button>
                        </div>
                      </div>
                      <div className='col-xl-3'>
                        <div className='day-performance-btn'>
                          <button>დღის</button>
                        </div>
                      </div>
                      <div className='col-xl-3'>
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
                      <div className='col-xl-3'>
                      <input value={inputValue} onChange={changeInput}  type="text" placeholder='სიტყვით ძიება...' />
                      </div>
                    </div>
                </div> 
              </div>
              <div className='performance-list'>
                  <div className='row'>
                    {performances.map((item,index)=>{
                      return (
                        <div className='col-xl-4'>
                          <div className='performance'>
                            <Link  to='#' >
                              <div className='performance-img'>
                              <img src={item.photo} alt="performance" />
                              </div>
                              <div className='performance-caption'>
                                <h2>{item.performance}</h2>
                                <span>{item.date}</span>
                                <p>{item.caption}</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      )
                    })}
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

const performances = [
  {
    performance:'ინციდენტი მეტროში',
    date:' 18 თებერვალი',
    caption: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად',
    photo:performancePhoto
  },
  {
    performance:'ინციდენტი მეტროში',
    date:' 18 თებერვალი',
    caption: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად',
    photo:performancePhoto
  },
  {
    performance:'ინციდენტი მეტროში',
    date:' 18 თებერვალი',
    caption: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად',
    photo:performancePhoto
  },
  {
    performance:'ინციდენტი მეტროში',
    date:' 18 თებერვალი',
    caption: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად',
    photo:performancePhoto
  },
  {
    performance:'ინციდენტი მეტროში',
    date:' 18 თებერვალი',
    caption: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად',
    photo:performancePhoto
  },
  {
    performance:'ინციდენტი მეტროში',
    date:' 18 თებერვალი',
    caption: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად',
    photo:performancePhoto
  },
]
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


export default Performance
