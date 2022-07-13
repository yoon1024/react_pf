import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faPlay } from '@fortawesome/free-solid-svg-icons';
import Popup from '../common/Popup';

function Youtube() {
	const [Vids, setVids] = useState([]);
	const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);

	useEffect(() => {
		const key = 'AIzaSyB07SmnE1cJMVJRKCZmg_kaotLyw9z0IiE';
		const playlist = 'PL4LRIdOIlx__4Jk4ktxkUK2l6bEDSp5ZU';
		const num = 6;

		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
		axios.get(url).then((json) => {
			console.log(json.data.items);
			setVids(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout name={'Youtube'}>
				<div className='box1'>
					<p>Youtube</p>
					<FontAwesomeIcon icon={faArrowDown} />
				</div>
				{Vids.map((vid, idx) => {
					const tit = vid.snippet.title;
					const desc = vid.snippet.description;
					const date = vid.snippet.publishedAt;
					const sub = `${process.env.PUBLIC_URL}/img/youtube_thumbnails`;
					const num = vid.snippet.position;
					return (
						<article key={idx}>
							<div
								className='pic'
								onClick={() => {
									setOpen(true);
									setIndex(idx);
								}}>
								<img src={`${sub}${num}.jpg`} alt={vid.snippet.title} />
								<FontAwesomeIcon icon={faPlay} />
							</div>
							<h3>{tit.length > 30 ? tit.substr(0, 30) + '...' : tit}</h3>
							<div className='txt'>
								<p>{desc.length > 150 ? desc.substr(0, 150) + '...' : desc}</p>
								<span>{date.split('T')[0]}</span>
							</div>
						</article>
					);
				})}
			</Layout>

			{Open && (
				<Popup setOpen={setOpen}>
					<iframe
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}></iframe>
				</Popup>
			)}
		</>
	);
}

export default Youtube;
