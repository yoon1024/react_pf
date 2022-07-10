import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function News() {
	const path = process.env.PUBLIC_URL;
	const [News, setNews] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/news.json`).then((json) => {
			setNews(json.data.news);
		});
	}, []);

	return (
		<figure id='news'>
			<div className='inner'>
				<h2>ABOUT</h2>
				<p>COFFEE BEANS & ROASTING</p>
				<div className='wrap'>
					{News.map((news, idx) => {
						return (
							<article key={idx}>
								<div className='pic'>
									<img src={`${path}/img/${news.pic}`} alt={news.name} />
								</div>
								<h3>{news.title}</h3>
								<p>{news.sub}</p>
								<NavLink to='#'>
									<em>See Detail</em>
								</NavLink>
							</article>
						);
					})}
				</div>
			</div>
		</figure>
	);
}

export default News;
