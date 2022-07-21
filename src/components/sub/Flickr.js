import Layout from '../common/Layout';
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Masonry from 'react-masonry-component';

function Flickr() {
	const dispatch = useDispatch();
	const frame = useRef(null);
	const { flickr } = useSelector((store) => store.flickrReducer);
	const masonryOptions = { transitionDuration: '0.5s' };
	useEffect(() => {
		dispatch({
			type: 'FLICKR_START',
			Opt: {
				type: 'interest',
			},
		});
	}, []);

	return (
		<Layout name={'Flickr'}>
			<div className='frame on' ref={frame}>
				<Masonry elementType={'div'} options={masonryOptions}>
					{flickr.map((pic, idx) => {
						<article ket={idx}>
							<div className='inner'>
								<div className='pic'>
									<img
										src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
										alt={pic.title}
									/>
								</div>
								<h2>{pic.title}</h2>
							</div>
						</article>;
					})}
				</Masonry>
			</div>
		</Layout>
	);
}

export default Flickr;
