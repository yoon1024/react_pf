import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Popup(props) {
	// const [Vids, setVids] = useState([]);
	// useEffect(() => {
	// 	const key = 'AIzaSyB07SmnE1cJMVJRKCZmg_kaotLyw9z0IiE';
	// 	const playlist = 'PL4LRIdOIlx__4Jk4ktxkUK2l6bEDSp5ZU';
	// 	const num = 6;

	// 	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
	// 	axios.get(url).then((json) => {
	// 		console.log(json.data.items);
	// 		setVids(json.data.items);
	// 	});
	// }, []);

	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);
	return (
		<aside className='Pop'>
			{/* {Vids.map((vid, idx) => {
				return <p key={idx}>{vid.snippet.title}</p>;
			})} */}
			<div className='con'>{props.children}</div>
			<span className='close' onClick={() => props.setOpen(false)}>
				<FontAwesomeIcon icon={faCircleXmark} />
			</span>
		</aside>
	);
}

export default Popup;
