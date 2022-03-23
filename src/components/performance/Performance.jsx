
import './Performance.css';

import {useState} from 'react';
import ArrowDown from '../../componentLogos/ArrowDown';
import ArrowUp from '../../componentLogos/ArrowUp';
import {Link} from 'react-router-dom';
import Message from '../../componentLogos/Message';
import Stuff from '../../componentLogos/Stuff';
import Actors from '../../componentLogos/Actors';

function Performance({allMovies,filteredMovies,filters,setFilters,availableDaysByMonths}) {
  const [value,setValue] = useState('');
  const ChangeValue = (e)=>setValue(e.target.textContent);
  const removeActive = () => setDropdown(false);
  const [secondValue,setSecondValue]=useState('');
  const [inputValue, setInputValue] = useState('');
  const changeInput = (e)=>setInputValue(e.target.value);
  const [open,setOpen]=useState(false);
  const [dropdown,setDropdown] = useState(false);
  const handleDropdown =()=>setDropdown(!dropdown);
  const handleOpen =()=>setOpen(!open);
  const removeSecondActive = ()=>setOpen(false);
  const changeSecondValue = (e)=>setSecondValue(e.target.textContent);
  const [monthBtn, setMonthBtn] = useState(false);
  const handleMonth = ()=>setMonthBtn(!monthBtn);
  const [monthValue,setMonthValue] = useState('');
  const changeMonth = (e)=> setMonthValue(e.target.textContent);
  const removeMonthActive = ()=>setMonthBtn(false)
  
  function numberClickHandler(index) {
    if (!availableDaysByMonths[filters.month - 1].includes(index + 1)) {
        return;
    }
    setFilters((latestFilters) => ({
        ...latestFilters,
        day: index +1
    }));
  
}
console.log(filters.day +1)
  return (
    <div className='performance-section'>
        <div className='inner-container'>
          <div className='performance-items'>
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
                                          {performance.map((element,index)=>{
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
                                          {performance.map((element,index)=>{
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
                  </div>
            </form>
            <div className='performance-container'>
                <div className='row'>
                  <div className='col-xl-9'>
                    <div className='performance-list'>
                      {filteredMovies.map((movie,index)=>{
                        return (
                        <div key={index}  className='performance-inner'>
                          <h2 className='performance-title' >{movie.title}</h2>
                          <div className='performance-poster'>
                            <img src={movie.poster} alt="" />
                          </div>
                          <div className='event-table'>
                                  <div className='starting-time'>
                                      <h3>{movie.startTitle}</h3>
                                      <span>{movie.startingTime}</span>
                                  </div>
                                  <div className='event-duration'>
                                      <h3>{movie.durationTitle}</h3>
                                      <span>{movie.duration}</span>
                                  </div>
                                  <div className='genre'>
                                      <h3>{movie.genreTitle}</h3>
                                      <span>{movie.genre}</span>
                                  </div>
                                  <Link to='#'>
                                      <span className='ticket' >ბილეთის ყიდვა </span>
                                      <span className='ticket-price'>50₾</span>
                                  </Link>
                          </div>
                          <div className='performance-describtion'>
                              <div className='describtion-title'>
                                  <Message/> 
                                  <h2>{movie.describtionTitle}</h2>
                              </div>
                              <p>{movie.describtion}</p>
                          </div>
                          <div className='performance-stuff'>
                            <div className='stuff-title'>
                                <Stuff/>
                                <h2>{movie.stuffTitle}</h2>
                            </div>
                            <div className='stuff-list'>
                              <div className='stuff-box'>
                                <h2>რეჟისორი:</h2>
                                <a href="#">გიორგი ბადაშელი</a>
                              </div>
                              <div className='stuff-box'>
                                <h2>კომპოზიტორი:</h2>
                                <a href="#">დავით ბოტკოველი</a>
                              </div>
                              <div className='stuff-box'>
                                <h2>მხატვარი:</h2>
                                <a href="#">დინა დადიანი</a>
                              </div>
                              <div className='stuff-box'>
                                <h2>ქორეოგრაფი:</h2>
                                <a href="#">ლიანა თოდუა</a>
                              </div>
                            </div>
                          </div>
                          <div className='performance-actors'>
                            <div className='actors-title'>
                              <Actors />
                              <h2>მონაწილეობენ</h2>
                            </div>
                            <div className='actors-list'>
                              <div className='actors-box'>
                                <a href="#">გიორგი ბადაშელი</a>
                                <a href="#">თინა დონაშვილი</a>
                                <a href="#">თიკუნა ბებია</a>
                              </div>
                              <div className='actors-box'>
                                <a href="#">გიორგი ბადაშელი</a>
                                <a href="#">თინა დონაშვილი</a>
                                <a href="#">თიკუნა ბებია</a>
                              </div>
                              <div className='actors-box'>
                                <a href="#">გიორგი ბადაშელი</a>
                                <a href="#">თინა დონაშვილი</a>
                                <a href="#">თიკუნა ბებია</a>
                              </div>
                              <div className='actors-box'>
                                <a href="#">გიორგი ბადაშელი</a>
                                <a href="#">თინა დონაშვილი</a>
                                <a href="#">თიკუნა ბებია</a>
                              </div>
                            </div>
                          </div>
                        </div>
                               )
                          })}
                    </div>
                  </div>
                  <div className='col-xl-3'>
                    <div className='choose-month'>
                        <div onFocus={handleMonth} className='month-input'>
                          <label>აირჩიე თვე</label>
                          <input type="text" onBlur={removeMonthActive}  className='select' onChange={changeMonth}  value={months[filters.month-1].month} placeholder='იანვარი'/>
                          {monthBtn? <ArrowUp /> : <ArrowDown /> }
                          <div className={monthBtn? 'selected active': 'selected'}>
                            <ul>
                              {months.map((item,index)=>{
                                return <li key={index} 
                                onClick={
                                        () =>
                                        setFilters((latestFilters) => ({
                                            ...latestFilters,
                                            month: index + 1
                                  }))
                                } >{item.month}</li>
                              })}
                            </ul>
                        </div>
                      </div> 
                    </div>
                    <div className='performance-calendar'>
                      <ul>
                        {
                          Array(daysInMonths[filters.month - 1])
                          .fill(null)
                          .map((_, index)=>(
                            <li key={index} onClick={()=>numberClickHandler(index)}
                            className={
                              [availableDaysByMonths[filters.month -1].includes(index + 1) ? `available`:'', filters.day === index + 1? 'active':''].join("")
                            }
                            >{index +1}
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

const daysInMonths =[31, new Date().getFullYear() % 4? 28 : 29, 31,30,31,30,31,31,30,31,30,31];
const months=[
  {month:'იანვარი'},
  {month:'თებერვალი'},
  {month:'მარტი'},
  {month:'აპრილი'},
  {month:'მაისი'},
  {month:'ივნისი'},
  {month:'ივლისი'},
  {month:'აგვისტო'},
  {month:'სექტემბერი'},
  {month:'ოქტომბერი'},
  {month:'ნოემბერი'},
  {month:'დეკემბერი'},
];
const performance = [
  {
      name:'დანაშაული და სასჯელი',
      genre:'დრამა',
   
  },
  {
      name:'ჭირვეულის მორჯულება',
      genre:'კომედია',
 
  },
  {
      name:'ქეთო და კოტე',
      genre:'მიუზიკლი',
     
  },
  {
      name:'ჯინსების თაობა',
      genre:'ბიოგრაფიული',
    
  },
  {
      name:'დარაბებს მიღმა გაზაფხულია',
      genre:'მელოდრამა',
    
  }


]



export default Performance
