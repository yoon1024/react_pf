import React from 'react';

function Visual() {
	const path = process.env.PUBLIC_URL;
	return (
		<figure id='visual'>
			<img src={`${path}/img/main_visual.jpg`} alt='커피를 따르는 남자의 손' />
			<div className='inner'>
				<div className='title'>
					<h2>I'VE BEEN FEELING</h2>
					<h1>UNDER PRESSURE</h1>
				</div>
				<h3>Lorem ipsum dolor sit amet consectetur.</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
					obcaecati eaque possimus deleniti esse quidem vero laborum aliquid
					assumenda accusantium!
				</p>
			</div>
		</figure>
	);
}

export default Visual;
