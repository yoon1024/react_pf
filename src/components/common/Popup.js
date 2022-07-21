import { useEffect, useState } from 'react';

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
			<div className='close' onClick={() => props.setOpen(false)}>
				<span>
					<p>close</p>
				</span>
			</div>
		</aside>
	);
}

export default Popup;
