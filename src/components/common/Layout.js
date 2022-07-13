import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Layout(props) {
	const frame = useRef(null);
	const path = process.env.PUBLIC_URL;

	useEffect(() => {
		frame.current.classList.add('on');
	}, []);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<figure>
				<img src={`${path}/img/${props.name}_figure.jpg`} alt='배너' />
			</figure>
			<div className='inner'>
				<div className='box1'>
					<p>{props.name}</p>
					<FontAwesomeIcon icon={faArrowDown} />
				</div>
				{props.children}
			</div>
		</section>
	);
}

export default Layout;
