import {useState, useEffect} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './News.css';
import PosterPhoto from '../../assets/images/accident.png';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';


function News() {

    const settings = { 
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        arrows:false,
        className: 'slides',
        
    };
    const [newsPosts, setNewsPosts] = useState([])

    useEffect(()=>{
        axios.get('http://apicity.cgroup.ge/api/news')
            .then(res => {
                console.log(res.data.data)
                setNewsPosts(res.data.data)
            
              
            })
            .catch(err =>{
                console.log(err)
            })
    },[])

  return (
    <div className='news-section'>
        <div className='inner-container'>
            <div className='news-items'>
                <div className='news-header'>აფიშა</div>
                <div className='news-slider'>
                   <Slider {...settings}>
                        {poster.map((item,index)=>{
                            return (
                                <Link key={index} to='#'>
                                <div className='poster'>
                                    <div className='poster-left'>
                                        <div className="date">
                                            <h3 className='poster-day' >{item.day}</h3>    
                                            <span className='poster-number' >{item.number}</span>    
                                            <span className='poster-month'>{item.month}</span>    
                                            <span className='poster-time' >{item.time}</span>    
                                        </div> 
                                        <div className='poster-header'>
                                            <h2>{item.name}</h2>
                                            <span className='director'>რეჟისორი:</span>
                                            <span className='director-name'>{item.directorName}</span>
                                        </div>   
                                    </div>
                                    <div className='poster-right'>
                                        <img src={item.photo} alt="poster" />    
                                    </div>
                                </div>
                            </Link>
                            )
                        })}
                   </Slider>
                </div>
                <div className='news'>სიახლეები</div>
                <div className='news-cards'>
                    <div className='row'>
                        {newsPosts.map((item)=>{
                            return (
                                <div key={item.id}  className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
                                    <div className='news-card-frame'>
                                        {console.log(item.id)}
                                        <Link to={`/newsdetail/${item.id}`}>
                                            <div className='news-image'>
                                                <img src={`http://apicity.cgroup.ge/${item.image}  `} alt="news" />
                                            </div>
                                            <div className='news-caption'>
                                                <h2>{item.title.en}</h2>
                                                <span>{item.created_month}</span>
                                                <p>{item.description.ka}
                                                </p>
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
const poster = [
    {
        day:'შაბათი',
        number:16,
        month:'მარტი',
        time:'20:00',
        name:'ინციდენტი მეტროში',
        director:'',
        directorName:'გიორგი ბადაშელი',
        photo:PosterPhoto

    },
    {
        day:'შაბათი',
        number:16,
        month:'მარტი',
        time:'20:00',
        name:'ინციდენტი მეტროში',
        director:'',
        directorName:'გიორგი ბადაშელი',
        photo:PosterPhoto

    },
    {
        day:'შაბათი',
        number:16,
        month:'მარტი',
        time:'20:00',
        name:'ინციდენტი მეტროში',
        director:'',
        directorName:'გიორგი ბადაშელი',
        photo:PosterPhoto

    },
    {
        day:'შაბათი',
        number:16,
        month:'მარტი',
        time:'20:00',
        name:'ინციდენტი მეტროში',
        director:'',
        directorName:'გიორგი ბადაშელი',
        photo:PosterPhoto

    },
]


export default News