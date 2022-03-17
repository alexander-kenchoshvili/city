import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './About.css';
import Slider from 'react-slick';
import sliderPhoto1 from '../../assets/images/jane.png';
import sliderPhoto2 from '../../assets/images/photo2.png';
import Message from '../../componentLogos/Message';
import Users from '../../componentLogos/Users';
import Gallery from '../../componentLogos/Gallery'
import GalleryPhoto1 from '../../assets/images/galleryPic.png';
import Video from '../../componentLogos/Video';
import videoTemplate from '../../assets/images/videoTemplate.png';
import Footer from '../Footer/Footer';

function About() {
    const settings = { 
        infinite:true,
        speed:500,
        slidesToShow:4,
        arrows:true,
        className: 'slides'
    };
  return (
    <div className='about-section'>
        <div className='actors-cover'></div>
        <div className='inner-container'>
            <div className="about-head">თეატრის შესახებ</div>
            <div className="history-theatre">
                <h3> <Message/> ისტორია</h3>
                <p>ილია ჭავჭავაძე (დ. 8 ნოემბერი, 1837, სოფელი ყვარელი — გ. 12 სექტემბერი, 1907, წიწამური) 
                    — ქართველი საზოგადო მოღვაწე, პუბლიცისტი, ჟურნალისტი, პოლიტიკოსი, მწერალი, რომელმაც მნიშვნელოვანი
                    როლი შეასრულა მეცხრამეტე საუკუნეში საქართველოში სამოქალაქო საზოგადოების ჩამოყალიბებაში, გადამწყვეტი
                    წვლილი შეიტანა საქართველოს ეროვნულ-განმათავისუფლებელი მოძრაობის შექმნასა და ლიბერალური ფასეულობების
                    გავრცელებაში.
                </p>
                <p>სათავეში ჩაუდგა თერგდალეულთა თაობას, რომლებმაც ქართულ ინტელექტუალურ სივრცეში მოდერნული, ევროპული იდეები
                    და ხედვები შემოიტანეს. ილია ჭავჭავაძის თაოსნობით დაარსდა და სრულიად ახალი სიტყვა თქვა ქართულ ჟურნალისტიკაში
                    მის მიერ გამოცემულმა გაზეთებმა „საქართველოს მოამბემ“ და „ივერიამ“. მნიშვნელოვანი წვლილი შეიტანა საქართველოში პირველი
                    ფინანსური დაწესებულების - სათავადაზნაურო-საადგილმამულო ბანკის შექმნაში, რომელსაც 30 წლის განმავლობაში ხელმძღვანელობდა.
                    ბანკის რესურსი უმეტესწილად საქართველოში სხვადასხვა კულტურულ, საგანმანათლებლო, ეკონომიკურ, საქველმოქმედო პროექტებს
                    ხმარდებოდა. მანვე მნიშვნელოვანი როლი ითამაშა ქართველთა შორის წერა-კითხვის გამავრცელებელი საზოგადოების ჩამოყალიბებასა
                    და ფუნქციონირებაში. მისი თაოსნობით გაიხსნა არაერთი სკოლა, სადაც სწავლება ქართულ ენაზე მიმდინარეობდა, რამაც საქართველოში
                    რუსიფიკაციის პროცესი შეაჩერა.
                </p>
            </div>
            <div className='board'>
                <div className='board-header'>
                    <h3> <Users /> ბორდის წევრები</h3>    
                </div>
                <Slider {...settings}  >
                    {content.map((item,index)=>{
                        return (
                            <div className='board-members' key={index} >
                                <a href="#">
                                    <img src={item.photo} alt="actors" />
                                    <h4>{item.name}</h4>
                                    <span>{item.profession}</span>
                                </a>
                            </div>
                        )
                    })}
                </Slider>
            </div>
            <div className='photo-gallery'>
                 <div className='photo-gallery-header'>
                    <h3> <Gallery/> ფოტო გალერია</h3>    
                </div>
                <Slider {...settings}>
                    {content.map((item,index)=>{
                        return (
                            <div className='gallery-pics'>
                                <a href="#">
                                    <img key={index} src={item.gallery} />
                                </a> 
                            </div>
                        )
                    })}    
                </Slider>
            </div>
            <div className='video-gallery'>
                <div className='photo-gallery-header'>
                    <h3> <Video /> ვიდეო გალერია</h3>    
                </div>
                <Slider {...settings} >
                    {content.map((item,index)=>{
                        return (
                            <div key={index} className='video-content'>
                                <img src={item.video} alt="" />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
     
    </div>
  )
}
const content = [
    {
        name:'ჯეინ ბონდი',
        profession:'რეჟისორი',
        photo: sliderPhoto1,
        gallery:GalleryPhoto1,
        video: videoTemplate
    },
    {
        name:'ჯეინ ბონდი',
        profession:'რეჟისორი',
        photo: sliderPhoto2,
        gallery:GalleryPhoto1,
        video: videoTemplate
    },
    {
        name:'ჯეინ ბონდი',
        profession:'რეჟისორი',
        photo: sliderPhoto1,
        gallery:GalleryPhoto1,
        video: videoTemplate
    },
    {
        name:'ჯეინ ბონდი',
        profession:'რეჟისორი',
        photo: sliderPhoto1,
        gallery:GalleryPhoto1,
        video: videoTemplate
    },
    {
        name:'ჯეინ ბონდი',
        profession:'რეჟისორი',
        photo: sliderPhoto1,
        gallery:GalleryPhoto1,
        video: videoTemplate
    },
    {
        name:'ჯეინ ბონდი',
        profession:'რეჟისორი',
        photo: sliderPhoto1,
        gallery:GalleryPhoto1,
        video: videoTemplate
    },
    {
        name:'ჯეინ ბონდი',
        profession:'რეჟისორი',
        photo: sliderPhoto1,
        video: videoTemplate
    },
    {
        name:'ჯეინ ბონდი',
        profession:'რეჟისორი',
        photo: sliderPhoto1
    },
    {
        name:'ჯეინ ბონდი',
        profession:'რეჟისორი',
        photo: sliderPhoto1
    },
]
export default About