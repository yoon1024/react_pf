import React from 'react';
import Anime from '../../asset/anim';

function Visual() {
	const path = process.env.PUBLIC_URL;
	return (
		<figure id='visual' className='myScroll'>
			<img src={`${path}/img/main_visual.jpg`} alt='커피를 따르는 남자의 손' />
			<div className='inner'>
				<div className='title'>
					<h2>I'VE BEEN FEELING</h2>
					<h1>UNDER PRESSURE</h1>
				</div>
				<h3>일상 속의 특별한 휴식, 언더프레셔</h3>
				<p>
					자체 개발한 여과식 추출 방식과 철저하고 체계적인 위생관리 시스템을
					통해 보다 선명하고 깨끗한 콜드브루 커피를 선보입니다
				</p>
			</div>
		</figure>
	);
}

export default Visual;
