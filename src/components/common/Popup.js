function Popup(props) {
	return (
		<aside className='Pop'>
			<div className='con'>{props.children}</div>
			<span className='close'>close</span>
		</aside>
	);
}

export default Popup;
