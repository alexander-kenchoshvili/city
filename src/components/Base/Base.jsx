import React, { useEffect, useState } from 'react';
import './Base.css';
import ArrowDown from '../../componentLogos/ArrowDown';
import ArrowUp from '../../componentLogos/ArrowUp';
import {Link} from 'react-router-dom';
import actorPhoto1 from '../../assets/images/photo-1508214751196-bcfd4ca60f91.png';
import axios from 'axios';


export default function Base() {
  const handleSubmit =(e)=>{
    e.preventDefault()
  }
  const [dropdown,setDropdown] = useState(false);
  const handleDropdown =()=>setDropdown(!dropdown);
  const [value,setValue] = useState('');
  const ChangeValue = (e)=>setValue(e.target.textContent);
  const removeActive = () => setDropdown(false);
  const [inputValue, setInputValue] = useState('');
  const changeInput = (e)=>setInputValue(e.target.value);
  const [member,setMember] = useState([]);
  const [position, setPosition] =useState([]);
  
  useEffect(()=>{
    axios.get('http://apicity.cgroup.ge/api/team-member')
        .then(res => {
            setMember(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
	},[])

	useEffect(()=>{
		axios.get('http://apicity.cgroup.ge/api/position')
			.then(res => {
				setPosition(res.data.data)
			})
			.catch(err =>{
				console.log(err)
			})
	},[])


  return (
    <div className='base' >
        <div className='inner-container'>
          <div className='base-content'>
            <div className='base-head'>ჩვენი დასი</div>
            <div className='base-inner'>
              <form onSubmit={handleSubmit}  >
                <div className='input-frame'>
                    <div className='input-box'>
                      <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-6'>
                          <input value={inputValue} onChange={changeInput}  type="text" placeholder='სიტყვით ძიება...' />
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6'>
                          <div onFocus={handleDropdown}  className='select-field'>
                            <input onBlur={removeActive}  onChange={ChangeValue}  className='select' type="text" placeholder='პროფესია' value={value} />                        
                            {dropdown? <ArrowUp /> : <ArrowDown /> }
                            <div  className={dropdown? 'selected active': 'selected'}  >
                              <ul>
                                {position.map((element,index)=>{
                                  return(
                                    <li key={index} onMouseDown={ChangeValue}>{element.title.ka}</li>
                                  )
                                })}
                                
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='actor-list'>
                    <div className='row'>
						{member.filter(item => {
							let itemPositions = item.positions.map((posi,index) =>{
								return posi.title.ka
							})
							return (`${item.first_name.ka} ${item.last_name.ka}`).indexOf(inputValue) !== -1 && 
									(itemPositions.includes(value) || value === '')
						}).map((element,i)=>{
							return(
								<div key={i}  className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
								<div className='actors'>
									<Link className='actor-photo'  to='/ActorDetail'>
									<img src={`http://apicity.cgroup.ge/${element.profile_photo}`} alt="actor" />
									<h2>{element.first_name.ka + ' ' + element.last_name.ka}</h2>
									<span>{element.positions.map((pos,index)=>{
										return (index ? ', ' : '') + pos.title.ka
									})}</span> 
									</Link>
								</div>
								</div>
							);
						})}                 
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
       
    </div>
  )
}



const actor=[
  {
    actorPhoto: actorPhoto1,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი',
    list:'გოჩა',
    
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'გელა',
    actorProfession:'გოჩა, მსახიობი, ქორეოგრაფი',
    list:'რეჟისორი',
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'დათო მსახიობი, ქორეოგრაფი',
    list:'მხატვარი',
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'გელა',
    actorProfession:'რეჟისორი',
    list:'დათო',
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი',
    list:'ქორეოგრაფი',
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },
  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },

  {
    actorPhoto:`${actorPhoto1}`,
    actorName:'ჯეინ დოუ',
    actorProfession:'რეჟისორი, მსახიობი, ქორეოგრაფი'
  },


]


const values = [

  {
    list:'მსახიობი'
  },
  {
    list:'კომპოზიტორი'
  },
  {
    list:'მხატვარი'
  },
  {
    list:'რეჟისორი'
  },
  {
    list:'ქორეოგრაფი'
  },
 

]