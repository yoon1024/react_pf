import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Masonry from 'react-masonry-component';

function Gallery() {
	const frame = useRef(null);
	const input = useRef(null);
	const [Items, setItems] = useState([]);
	const [Loading, setLoading] = useState(true);
	const [EnableClick, setEnableClick] = useState(true);
	const masonryOptions = { transitionDuration: '0.5s' };

	const getFlickr = async (opt) => {
		const key = 'fc209af65c0a7e52e3ce3a2358041834';
		const method_interest = 'flickr.interestingness.getList';
		const method_search = 'flickr.photos.search';
		const num = 100;
		let url = '';

		if (opt.type === 'interest') {
			url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1`;
		}
		if (opt.type === 'search') {
			url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&format=json&nojsoncallback=1&tags=${opt.tags}`;
		}
		await axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			setItems(json.data.photos.photo);
		});

		setTimeout(() => {
			setLoading(false);
			frame.current.classList.add('on');
			setTimeout(() => {
				setEnableClick(true);
			}, 500);
		}, 1000);
	};

	useEffect(() => {
		getFlickr({ type: 'interest' });
	}, []);

	return (
		<Layout name={'Gallery'}>
			{Loading && (
				<img
					className='loading'
					src={`${process.env.PUBLIC_URL}/img/loading.gif`}
				/>
			)}
			<button
				onClick={() => {
					if (!EnableClick) return;
					setEnableClick(false);
					setLoading(true);
					frame.current.classList.remove('on');
					getFlickr({ type: 'interest' });
				}}>
				Interest Gallery
			</button>
			<button
				onClick={() => {
					if (!EnableClick) return;
					setEnableClick(false);
					setLoading(true);
					frame.current.classList.remove('on');
					getFlickr({ type: 'search', tags: 'coffee' });
				}}>
				Search Gallery
			</button>

			<div className='searchBox'>
				<input
					type='text'
					ref={input}
					placeholder='Please enter a search word'
				/>
				<button
					onClick={() => {
						const result = input.current.value;
						input.current.value = '';

						if (!EnableClick) return;
						setEnableClick(false);
						setLoading(true);
						frame.current.classList.remove('on');
						getFlickr({
							type: 'search',
							tags: result,
						});
					}}>
					SEARCH
				</button>
			</div>

			<Masonry elementType={'div'} options={masonryOptions}>
				<div className='frame' ref={frame}>
					{Items.map((item, idx) => {
						return (
							<article key={idx}>
								<div className='flickr'>
									<div className='pic'>
										<img
											src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
											alt={item.title}
										/>
									</div>
									<h2>{item.title}</h2>
								</div>
							</article>
						);
					})}
				</div>
			</Masonry>
		</Layout>
	);
}

export default Gallery;
