import React, { useState,useEffect } from 'react';
import ActorPhoto from '../../assets/images/photo-1568602471122-7832951cc4c5.png';
import Arrow from '../../assets/images/arrow-right.svg';
import {Link} from 'react-router-dom';
import FB from '../../componentLogos/FB';
import Insta from '../../componentLogos/Insta';
import Twitter from '../../componentLogos/Twitter';
import LinkedIn from '../../componentLogos/LinkedIn';
import Message from '../../componentLogos/Message';
import Video from '../../componentLogos/Video';
import Spectacle from '../../assets/images/spectacle.png';
import GalleryPhoto from '../../assets/images/galleryphoto.png';
import { SRLWrapper } from "simple-react-lightbox";
import './ActorDetail.css';
import axios from 'axios';
import {useParams} from 'react-router-dom';
function ActorDetail() {
  const options = {
    buttons: {
      showAutoplayButton: true,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: true,
      showNextButton: true,
      showPrevButton: true,
      showThumbnailsButton: false,
    }
}
const {id} = useParams();
const [member,setMember]=useState(null)
const [mySpectacle,setSpectacle]=useState(null)
useEffect(()=>{
  axios.get('http://apicity.cgroup.ge/api/team-member/' +id)
      .then(res => {
          setMember(res.data.data)
      })
      .catch(err =>{
          console.log(err)
      })
},[id])
useEffect(()=>{
  axios.post('http://apicity.cgroup.ge/api/team-member-spectacle/' +id)
      .then(res => {
          setSpectacle(res.data.data)
      })
      .catch(err =>{
          console.log(err)
      })
},[id])
if(!member || !mySpectacle ) return <div>Loading ...</div>
  const spectacles = Object.values(mySpectacle)
  return (
    <div className='actors-section'>
      <div className='actors-cover'>
        <div className='actor-header'>
              <div className='actor-head'>
                <div className='actor-img'>
                  <img src={`http://apicity.cgroup.ge/${member.profile_photo}`} alt="actor" /> 
                </div>
                <div className='actor-header-info'>
                  <div className='actor-info'>
                    <h2>{member.first_name.ka + ' ' + member.last_name.ka}</h2>
                    <span className='actor-profession'>{member.positions.map((item,index)=>{
                      return (index?", ":'') + item.title.ka
                    })}</span>
                    <span className='actor-age'>ასაკი: {member.age}, სქესი: {member.gender ===1? 'მამრობითი':'მდედრობითი' }</span>
                  </div>
                  <div className='social-network'>
                      <span>გამოგვყევით</span>
                      <img className='social-arrow' src={Arrow} alt="arrow" />
                      <Link className='insta' to={`${member.instagram}`}> 
                        <Insta />
                      </Link>
                      <Link className='fb' to={`${member.facebook}`}> 
                          <FB />
                      </Link>
                      <Link className='twitter' to={`${member.twitter}`}> 
                          <Twitter />
                      </Link>
                      <Link className='linkedin' to={`${member.linked_in}`}> 
                          <LinkedIn />
                      </Link>
                  </div>
                </div>
              </div>
        </div>
      </div>
      <div className='inner-container'>
          <div className='actor-content'>
            <div className='actor-bio' >
              <div className='bio-describtion'>
                <h2> <Message />  აღწერა</h2>
                <p>{member.description.ka}</p>
                <p>{member.description.ka}</p>
              </div>
            </div>
            <div className='my-performance'>
                  <h2> <Video /> ჩემი სპექტაკლები</h2>
                  <div className='row'>
                    {spectacles.map((item,index)=>{
                      return (
                        <div key={index} className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
                          <div className='performances'>
                            <Link to='#'>
                              <img src={`http://apicity.cgroup.ge/${item.images[0]}`} alt="" />  
                              <h3>{item.title.ka}</h3>
                              <span>{item.positions.map((pos,i)=>{
                                return (i?',': '') + pos.title.ka 
                              })}</span>
                            </Link> 
                          </div>
                        </div>
                      )
                    })}
                  </div>
            </div>
            <div className='my-gallery'>
              <SRLWrapper options={options} >
                <div className='gallery-wrapper'>
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                  <img src={GalleryPhoto} alt="" />
                </div>
              </SRLWrapper>
            </div>          
          </div>
      </div>
   
    </div>
  )
}






const actors = [
  {
    performanacePhoto: Spectacle,
    name:'დანაშაული და სასჯელი',
    profession:'მსახიობი'
  },
  {
    performanacePhoto: Spectacle,
    name:'დანაშაული და სასჯელი',
    profession:'მსახიობი'
  },
  {
    performanacePhoto: Spectacle,
    name:'დანაშაული და სასჯელი',
    profession:'მსახიობი'
  },
  {
    performanacePhoto: Spectacle,
    name:'დანაშაული და სასჯელი',
    profession:'მსახიობი'
  },
  {
    performanacePhoto: Spectacle,
    name:'დანაშაული და სასჯელი',
    profession:'მსახიობი'
  },
  {
    performanacePhoto: Spectacle,
    name:'დანაშაული და სასჯელი',
    profession:'მსახიობი'
  },
  {
    performanacePhoto: Spectacle,
    name:'დანაშაული და სასჯელი',
    profession:'მსახიობი'
  },
  {
    performanacePhoto: Spectacle,
    name:'დანაშაული და სასჯელი',
    profession:'მსახიობი'
  }
]







export default ActorDetail

