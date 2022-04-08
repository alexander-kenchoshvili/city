

import {useEffect, useRef, useState} from 'react';
import './Performance.css';
import ArrowDown from '../../componentLogos/ArrowDown';
import ArrowUp from '../../componentLogos/ArrowUp';
import {Link} from 'react-router-dom';
import Message from '../../componentLogos/Message';
import Stuff from '../../componentLogos/Stuff';
import Actors from '../../componentLogos/Actors';
import Slider from 'react-slick';
import poster from '../../assets/images/performance-poster.png';

function Performance({allMovies,filteredMovies,otherMovies,filters,setFilters,availableDaysByMonths}) {

  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={`${poster}`} />
        </a>
      );
    },
    dots: true,
    arrows:false,
    slideCount:6,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const [inputValue, setInputValue] = useState('');
  const changeInput = (e)=>setInputValue(e.target.value);
  const [monthBtn, setMonthBtn] = useState(false);
  const handleMonth = ()=>setMonthBtn(!monthBtn);
  const removeMonthActive = ()=>setMonthBtn(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const listElementRef = useRef(null);
  
  	function numberClickHandler(index) {
		if (!availableDaysByMonths[filters.month - 1].includes(index + 1)) {
			return;
		}
		setFilters((latestFilters) => ({
			...latestFilters,
			day: index +1
		}));	
	}	
	function movieSelectHandler(movie, index) {
		setSelectedMovie(movie.id);
		listElementRef.current.children[index].scrollIntoView();
	}
	useEffect(() => {
		if(filteredMovies.length) {
			setSelectedMovie(filteredMovies[0].id)
		}
	}, [filteredMovies])

  return (
    <div className='performance-section'>
        <div className='inner-container'>
          <div className='performance-items'>
            <form >
                  <div className='input-frame'>
                      <div className='input-box'>
                          <div className='row'>
                              <div className='col-xl-12'>
                                  <input type="text" value={inputValue} onChange={changeInput} placeholder='სიტყვით ძიება...' />
                              </div>
                          </div>
                      </div>
                  </div>
            </form>
            <div className='performance-container'>
              <div className='row'>
                <div className='col-xl-9'>
                  <div className='performance-list' ref={listElementRef}>
                    {filteredMovies.filter(item =>{
                      return item.title.indexOf(inputValue) !== -1
                    }).map((movie,index)=>{
                      return (
                          <div key={index}  className='performance-inner'>
                            <div className='row'>
                              <div className='col-xl-12'>
                              <h2 className='performance-title' >{movie.title}</h2>
                            <div className='performance-poster'>
                              <Slider {...settings}>
                                <div>
                                    <img src={poster}/>
                                </div>
                                <div>
                                    <img src={poster}/>
                                </div>
                                <div>
                                    <img src={poster}/>
                                </div>
                                <div>
                                    <img src={poster}/>
                                </div>
                                <div>
                                    <img src={poster}/>
                                </div>
                              </Slider> 
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
                                    <Link to='/buyTicket'>
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
                                <div className='col-xl-3'>
                                  <div className='stuff-box'>
                                    <h2>რეჟისორი:</h2>
                                    <a href="#">გიორგი ბადაშელი</a>
                                  </div>
                                </div>
                                <div className='col-xl-3'>
                                  <div className='stuff-box'>
                                    <h2>კომპოზიტორი:</h2>
                                    <a href="#">დავით ბოტკოველი</a>
                                  </div>
                                </div>
                                <div className='col-xl-3'>
                                  <div className='stuff-box'>
                                    <h2>მხატვარი:</h2>
                                    <a href="#">დინა დადიანი</a>
                                  </div>
                                </div>
                                <div className='col-xl-3'>
                                  <div className='stuff-box'>
                                      <h2>ქორეოგრაფი:</h2>
                                      <a href="#">ლიანა თოდუა</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='performance-actors'>
                              <div className='actors-title'>
                                <Actors />
                                <h2>მონაწილეობენ</h2>
                              </div>
                              <div className='actors-list'>
                                <div className='col-xl-3'>
                                  <div className='actors-box'>
                                    <a href="#">გიორგი ბადაშელი</a>
                                    <a href="#">თინა დონაშვილი</a>
                                    <a href="#">თიკუნა ბებია</a>
                                  </div>
                                </div>
                                <div className='col-xl-3'>
                                  <div className='actors-box'>
                                    <a href="#">გიორგი ბადაშელი</a>
                                    <a href="#">თინა დონაშვილი</a>
                                    <a href="#">თიკუნა ბებია</a>
                                  </div>
                                </div>
                                <div className='col-xl-3'>
                                  <div className='actors-box'>
                                    <a href="#">გიორგი ბადაშელი</a>
                                    <a href="#">თინა დონაშვილი</a>
                                    <a href="#">თიკუნა ბებია</a>
                                  </div>
                                </div>
                                <div className='col-xl-3'>
                                  <div className='actors-box'>
                                    <a href="#">გიორგი ბადაშელი</a>
                                    <a href="#">თინა დონაშვილი</a>
                                    <a href="#">თიკუნა ბებია</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                              </div>
                            </div>
                          </div>
                          )
                    })}
                    {otherMovies.map((item,index)=>{
                      return (
                        <div key={index}  className='performance-inner'>
                            <h2 className='performance-title' >{item.title}</h2>
                            <div className='performance-poster'>
                            <Slider {...settings}>
                                <div>
                                    <img src={item.poster} />
                                </div>
                                <div>
                                    <img src={item.poster} />
                                </div>
                                <div>
                                    <img src={item.poster } />
                                </div>
                                <div>
                                    <img src={item.poster  } />
                                </div>
                                <div>
                                    <img src={item.poster} />
                                </div>
                              </Slider> 
                            </div>
                            <div className='event-table'>
                                <div className='starting-time'>
                                    <h3>{item.startTitle}</h3>
                                    <span>{item.startingTime}</span>
                                </div>
                                <div className='event-duration'>
                                    <h3>{item.durationTitle}</h3>
                                    <span>{item.duration}</span>
                                </div>
                                <div className='genre'>
                                    <h3>{item.genreTitle}</h3>
                                    <span>{item.genre}</span>
                                </div>
                                <Link to='#'>
                                    <span className='ticket' >ბილეთის ყიდვა </span>
                                    <span className='ticket-price'>50₾</span>
                                </Link>
                            </div>
                            <div className='performance-describtion'>
                                <div className='describtion-title'>
                                    <Message/> 
                                    <h2>{item.describtionTitle}</h2>
                                    
                                </div>
                                <p>{item.describtion}</p>
                            </div>
                            <div className='performance-stuff'>
                              <div className='stuff-title'>
                                  <Stuff/>
                                  <h2>{item.stuffTitle}</h2>
                              </div>
                              <div className='stuff-list'>
                                  <div className='col-xl-3'>
                                    <div className='stuff-box'>
                                      <h2>რეჟისორი:</h2>
                                      <a href="#">გიორგი ბადაშელი</a>
                                    </div>
                                  </div>
                                  <div className='col-xl-3'>
                                    <div className='stuff-box'>
                                      <h2>კომპოზიტორი:</h2>
                                      <a href="#">დავით ბოტკოველი</a>
                                    </div>
                                  </div>
                                  <div className='col-xl-3'>
                                    <div className='stuff-box'>
                                      <h2>მხატვარი:</h2>
                                      <a href="#">დინა დადიანი</a>
                                    </div>
                                  </div>
                                  <div className='col-xl-3'>
                                    <div className='stuff-box'>
                                        <h2>ქორეოგრაფი:</h2>
                                        <a href="#">ლიანა თოდუა</a>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <div className='performance-actors'>
                              <div className='actors-title'>
                                <Actors />
                                <h2>მონაწილეობენ</h2>
                              </div>
                              <div className='actors-list'>
                                  <div className='col-xl-3'>
                                    <div className='actors-box'>
                                      <a href="#">გიორგი ბადაშელი</a>
                                      <a href="#">თინა დონაშვილი</a>
                                      <a href="#">თიკუნა ბებია</a>
                                    </div>
                                  </div>
                                  <div className='col-xl-3'>
                                    <div className='actors-box'>
                                      <a href="#">გიორგი ბადაშელი</a>
                                      <a href="#">თინა დონაშვილი</a>
                                      <a href="#">თიკუნა ბებია</a>
                                    </div>
                                  </div>
                                  <div className='col-xl-3'>
                                    <div className='actors-box'>
                                      <a href="#">გიორგი ბადაშელი</a>
                                      <a href="#">თინა დონაშვილი</a>
                                      <a href="#">თიკუნა ბებია</a>
                                    </div>
                                  </div>
                                  <div className='col-xl-3'>
                                    <div className='actors-box'>
                                      <a href="#">გიორგი ბადაშელი</a>
                                      <a href="#">თინა დონაშვილი</a>
                                      <a href="#">თიკუნა ბებია</a>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className='col-xl-3'>
                  <div className='performance-right-wrapper'>
                      <div className='choose-month'>
                          <div onFocus={handleMonth} className='month-input'>
                            <label>აირჩიე თვე</label>
                            <input type="text" onBlur={removeMonthActive}  className='select' value={months[filters.month-1].month} readOnly/>
                            {monthBtn? <ArrowUp /> : <ArrowDown /> }
                            <div className={monthBtn? 'selected active': 'selected'}>
                              <ul>
                                {months.map((item,index)=>{
                                  return <li key={index} 
                                  onMouseDown={
                                    () =>
                                    setFilters((latestFilters) => ({
                                        ...latestFilters,
                                        month: index + 1
                                    }))
                                  } >{availableDaysByMonths[index].length !==0  && filters.day  ? item.month:null }</li>
                                })}
                              </ul>
                          </div>
                        </div> 
                      </div>
                      <div className='performance-calendar'>
                        <ul >
                          {
                            Array(daysInMonths[filters.month - 1])
                            .fill(null)
                            .map((_, index)=>(
                              <li key={index} onClick={()=>numberClickHandler(index)}
                              className={
                                [availableDaysByMonths[filters.month -1].includes(index + 1) ? `available`:'', filters.day === index + 1? 'active':''].join("")
                              }
                              >{String(index + 1).padStart(2, '0')}
                                {filters.day === index +1 ? 
                                  filteredMovies.length > 0 &&
                                    <div className='titles'  >
                                      <ul>
                                        {filteredMovies.map((movie, index) => (
                                          <li 
                                            key={movie.id}
                                            className={selectedMovie === movie.id ? 'active' : ''}
                                            onClick={e => movieSelectHandler(movie, index)}
                                          >{movie.title}
                                          </li>
                                        ))}
                                      </ul>
                                    </div> : null
                                  }
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



export default Performance
