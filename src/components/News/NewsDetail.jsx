import {useState, useEffect} from 'react';
import './NewsDetail.css';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function NewsDetail() {
    const {id} = useParams();
    const [newsPosts, setNewsPosts] = useState(null)
    useEffect(()=>{
		axios.get('http://apicity.cgroup.ge/api/news/'+ id)
		.then(res => {
			setNewsPosts(res.data.data)
		})
		.catch(err =>{
			console.log(err)
		})
	}, [id]);

	if(!newsPosts) return <div>Loading ...</div>
	
	return (
		<div className='detail-news-section'>
			<div className='inner-container'>
				<div className='detail-news-header'>
					<h2>{newsPosts.title.en}</h2>
					<span>{newsPosts.created_date}</span>
				</div>
				<div className='detail-news-poster'>
					<img src={`http://apicity.cgroup.ge/${newsPosts.image}`} alt={newsPosts.title.en} />
				</div>
				<div className='detail-news-text'>
					<p>{newsPosts.description.en}
					</p>
					<p>{newsPosts.description.ka}
					</p>
				</div>
			</div>
		</div>
	)
}

export default NewsDetail