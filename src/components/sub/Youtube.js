import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
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
				{/* <div className='box'>
					<ul>
						<li className='black'>
							<h2>
								BY OFFETTING IN THIS MANNER WE REDUCE EMISSION OF OTHER
								GREENHOUSE GASSES SIMULTANEOUSLY
							</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
								atque dignissimos quo expedita. Ipsum quam nemo possimus
								molestiae temporibus beatae voluptas tempora doloribus molestias
								atque perferendis, et animi eveniet expedita?
							</p>
						</li>
						<li className='white'>
							<h2>ARCHITECTURE, LANDSCAPE AND INTERIOR</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
								doloribus vel eaque incidunt qui ab, repellat consectetur rem
								expedita repellendus aliquid ipsam eligendi architecto. Dolor
								eius odit alias quas. Mollitia?
							</p>
						</li>
					</ul>
				</div> */}
				<div className='title'>
					<h2>OUR EXPERTISE</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
						dignissimos at ab harum illo dolor, eligendi minus expedita laborum
						eos esse molestias quos fuga recusandae? Eius deserunt culpa velit
						ut? Sunt sit voluptate sequi quaerat quas molestias, exercitationem
						excepturi eos?
					</p>
				</div>
				<div className='wrap'>
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
								<div className='txt'>
									<h3>{tit.length > 20 ? tit.substr(0, 20) + '...' : tit}</h3>
									<p>{desc.length > 50 ? desc.substr(0, 50) + '...' : desc}</p>
									<span>{date.split('T')[0]}</span>
									<FontAwesomeIcon icon={faArrowRightLong} />
								</div>
							</article>
						);
					})}
				</div>
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
