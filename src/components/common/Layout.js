function Layout(props) {
	const path = process.env.PUBLIC_URL;
	return (
		<section className={`content ${props.name}`}>
			<figure>
				<img src={`${path}/img/${props.name}_figure.jpg`} alt='배너' />
			</figure>
			<div className='inner'>{props.children}</div>
		</section>
	);
}

export default Layout;
