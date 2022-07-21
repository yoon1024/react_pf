import React from 'react';

function Section_Dessert({ Scrolled }) {
	console.log(Scrolled);
	return (
		<figure id='dessert' className='myScroll'>
			<div className='pic'>
				<div className='img'></div>
				<h1>
					HOMEMAED
					<br />
					BAKERY
				</h1>
			</div>
			<div className='inner'></div>
		</figure>
	);
}

export default Section_Dessert;
