import React from 'react';
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
  return (
    <div className='actors-section'>
      <div className='actors-cover'>
        <div className='actor-header'>
              <div className='actor-head'>
                <div className='actor-img'>
                  <img src={ActorPhoto} alt="actor" /> 
                </div>
                <div className='actor-header-info'>
                  <div className='actor-info'>
                    <h2>დავით გიორგობიანი</h2>
                    <span className='actor-profession'>რეჟისორი, მსახიობი, ქორეოგრაფი</span>
                    <span className='actor-age'>ასაკი: 28, სქესი: მამრობითი</span>
                  </div>
                  <div className='social-network'>
                      <span>გამოგვყევით</span>
                      <img className='social-arrow' src={Arrow} alt="arrow" />
                      <Link className='insta' to='#'> 
                        <Insta />
                      </Link>
                      <Link className='fb' to='#'> 
                          <FB />
                      </Link>
                      <Link className='twitter' to='#'> 
                          <Twitter />
                      </Link>
                      <Link className='linkedin' to='#'> 
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
                <p>ილია ჭავჭავაძე (დ. 8 ნოემბერი, 1837, სოფელი ყვარელი — გ. 12 სექტემბერი, 1907, წიწამური) — ქართველი საზოგადო მოღვაწე, პუბლიცისტი, ჟურნალისტი, პოლიტიკოსი, მწერალი, რომელმაც მნიშვნელოვანი როლი შეასრულა მეცხრამეტე საუკუნეში საქართველოში სამოქალაქო საზოგადოების ჩამოყალიბებაში, გადამწყვეტი წვლილი შეიტანა საქართველოს ეროვნულ-განმათავისუფლებელი მოძრაობის შექმნასა და ლიბერალური ფასეულობების გავრცელებაში.
                </p>
                <p>სათავეში ჩაუდგა თერგდალეულთა თაობას, რომლებმაც ქართულ ინტელექტუალურ სივრცეში მოდერნული, ევროპული იდეები და ხედვები შემოიტანეს. ილია ჭავჭავაძის თაოსნობით დაარსდა და სრულიად ახალი სიტყვა თქვა ქართულ ჟურნალისტიკაში მის მიერ გამოცემულმა გაზეთებმა „საქართველოს მოამბემ“ და „ივერიამ“. მნიშვნელოვანი წვლილი შეიტანა საქართველოში პირველი ფინანსური დაწესებულების - სათავადაზნაურო-საადგილმამულო ბანკის შექმნაში, რომელსაც 30 წლის განმავლობაში ხელმძღვანელობდა. ბანკის რესურსი უმეტესწილად საქართველოში სხვადასხვა კულტურულ, საგანმანათლებლო, ეკონომიკურ, საქველმოქმედო პროექტებს ხმარდებოდა. მანვე მნიშვნელოვანი როლი ითამაშა ქართველთა შორის წერა-კითხვის გამავრცელებელი საზოგადოების ჩამოყალიბებასა და ფუნქციონირებაში. მისი თაოსნობით გაიხსნა არაერთი სკოლა, სადაც სწავლება ქართულ ენაზე მიმდინარეობდა, რამაც საქართველოში რუსიფიკაციის პროცესი შეაჩერა.</p>
              </div>
            </div>
            <div className='my-performance'>
                  <h2> <Video /> ჩემი სპექტაკლები</h2>
                  <div className='row'>
                    {actors.map((item,index)=>{
                      return (
                        <div key={index} className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
                          <div className='performances'>
                            <Link to='#'>
                              <img src={item.performanacePhoto} alt="" />  
                              <h3>{item.name}</h3>
                              <span>{item.profession}</span>
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

