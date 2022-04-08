import React from 'react';
import './Rent.css';
import RentPhoto from '../../assets/images/rentphoto.png';
import Message from '../../componentLogos/Message';
import Slider from 'react-slick';



function Rent() {
    const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img src={`${RentPhoto}`} />
            </a>
          );
        },
        arrows: false,
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

   


  return (
    <div className='rent-section'>
        <div className='inner-container'>
            <div className='rent-items'>
                <div className='rent-header'>
                    იქირავე ჩვენი დარბაზი
                </div>
                <div className='rent-img'>
                    <Slider {...settings}>
                        <div>
                            <img src={RentPhoto } />
                        </div>
                        <div>
                            <img src={RentPhoto} />
                        </div>
                        <div>
                            <img src={RentPhoto } />
                        </div>
                        <div>
                            <img src={RentPhoto  } />
                        </div>
                        <div>
                            <img src={RentPhoto  } />
                        </div>
                        <div>
                            <img src={RentPhoto } />
                        </div>
                    </Slider> 
                </div>
                <div className='rent-content'>
                    <div className='rent-address'>
                        <div className='rent-street'>
                            <span>მისამართი</span>
                            <a href="https://www.google.com/maps/place/CGroup.Ge+-+Web+Development+Company/@41.7254039,44.7708103,15z/data=!4m5!3m4!1s0x0:0x1410f2af64b5ab36!8m2!3d41.7254039!4d44.7708103" target="_blank" rel="noopener noreferrer">პეკინის #25</a>
                        </div>
                        <div className='rent-number'>
                            <span>ტელეფონი</span>
                            <a href="tel:+995 595 59 59 59">+995 595 59 59 59</a>
                        </div>
                    </div>
                    <div className='about-hall'>
                        <h3> <Message/> დარბაზის შესახებ </h3>
                        <p>ორი ახალგაზრდა მამაკაცი მეტროს სავსე ვაგონში აღმოჩნდება. მგზავრებს მათთან ერთად ერთ 
                            სივრცეში ყოფნა ნამდვილ ჯოჯოხეთად ექცევათ - ორივე საშინლად ამცირებს მათ და ძალადობს
                            მაგრამ წინააღმდეგობის გაწევას ვერც ერთი მათგანი ბედავს, ვერც ერთი იცავს საკუთარ ღირსებას
                            და ვერ ერთიანდება ბოროტების წინაღმდეგ. შიშით და დაუსჯელობით ისინი სრულ თავისუფლებას
                            აძლევენ სისასტიკეს.</p>
                    </div>
                    <div className='rent-conditions'>
                    <h3> <Message/> პირობები </h3>
                    <p>ორი ახალგაზრდა მამაკაცი მეტროს სავსე ვაგონში აღმოჩნდება. მგზავრებს მათთან ერთად ერთ სივრცეში
                        ყოფნა ნამდვილ ჯოჯოხეთად ექცევათ - ორივე საშინლად ამცირებს მათ და ძალადობს. მაგრამ წინააღმდეგობის
                        გაწევას ვერც ერთი მათგანი ბედავს, ვერც ერთი იცავს საკუთარ ღირსებას და ვერ ერთიანდება ბოროტების წინაღმდეგ.
                        შიშით და დაუსჯელობით ისინი სრულ თავისუფლებას აძლევენ სისასტიკეს.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Rent