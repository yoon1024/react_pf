import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function Popup(props) {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);
	return (
		<aside className='Pop'>
			<div className='con'>{props.children}</div>
			<span className='close' onClick={() => props.setOpen(false)}>
				<FontAwesomeIcon icon={faCircleXmark} />
			</span>
		</aside>
	);
}

export default Popup;
