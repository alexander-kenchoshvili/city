import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './News.css';
import PosterPhoto from '../../assets/images/accident.png';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import newsImg from '../../assets/images/news.png';


function News() {

    const settings = { 
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        arrows:false,
        className: 'slides'
    };

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
                        {news.map((item,index)=>{
                            return (
                                <div key={index}  className='col-xl-4'>
                                    <div className='news-card-frame'>
                                        <Link to='/newsdetail'>
                                            <div className='news-image'>
                                                <img src={item.newsImg} alt="news" />
                                            </div>
                                            <div className='news-caption'>
                                                <h2>{item.name}</h2>
                                                <span>{item.date}</span>
                                                <p>{item.caption}
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
const news =[
    {
        newsImg:newsImg,
        name:'სიახლის სათაურის ველი',
        date:'18 თებერვალი',
        caption:'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად'
    },
    {
        newsImg:newsImg,
        name:'სიახლის სათაურის ველი',
        date:'18 თებერვალი',
        caption:'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად'
    },
    {
        newsImg:newsImg,
        name:'სიახლის სათაურის ველი',
        date:'18 თებერვალი',
        caption:'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად'
    },
    {
        newsImg:newsImg,
        name:'სიახლის სათაურის ველი',
        date:'18 თებერვალი',
        caption:'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად'
    },
    {
        newsImg:newsImg,
        name:'სიახლის სათაურის ველი',
        date:'18 თებერვალი',
        caption:'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად'
    },
    {
        newsImg:newsImg,
        name:'სიახლის სათაურის ველი',
        date:'18 თებერვალი',
        caption:'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად'
    },
    {
        newsImg:newsImg,
        name:'სიახლის სათაურის ველი',
        date:'18 თებერვალი',
        caption:'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად'
    },
    {
        newsImg:newsImg,
        name:'სიახლის სათაურის ველი',
        date:'18 თებერვალი',
        caption:'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად'
    },
    {
        newsImg:newsImg,
        name:'სიახლის სათაურის ველი',
        date:'18 თებერვალი',
        caption:'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად'
    },
]
export default News