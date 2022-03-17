import React from 'react';
import './Base.css';
import ArrowDown from '../../componentLogos/ArrowDown';
import { useState } from 'react';
import ArrowUp from '../../componentLogos/ArrowUp';
import {Link} from 'react-router-dom';
import actorPhoto1 from '../../assets/images/photo-1508214751196-bcfd4ca60f91.png'
import Footer from '../Footer/Footer';




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
  const [data,setData] = useState(actor);

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
                        <div className='col-xl-6'>
                          <input value={inputValue} onChange={changeInput}  type="text" placeholder='სიტყვით ძიება...' />
                        </div>
                        <div className='col-xl-6'>
                          <div onFocus={handleDropdown}  className='select-field'>
                            <input onBlur={removeActive}  onChange={ChangeValue}  className='select' type="text" placeholder='პროფესია' value={value} />                        
                            {dropdown? <ArrowUp /> : <ArrowDown /> }
                            <div  className={dropdown? 'selected active': 'selected'}  >
                              <ul>
                                {actor.map((element,index)=>{
                                  return(
                                    <li   key={index}   onClick={ChangeValue}  >{element.list}</li>
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
                      { data.filter(item =>{
                        return item.actorProfession.indexOf(value) !== -1 && item.actorName.indexOf(inputValue) !== -1
                      }).map((element,i)=>{
                        return(
                            <div key={i}  className='col-xl-3'>
                              <div className='actors'>
                                <Link className='actor-photo'  to='/ActorDetail'>
                                  <img src={element.actorPhoto} alt="actor" />
                                  <h2>{element.actorName}</h2>
                                  <span>{element.actorProfession}</span> 
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