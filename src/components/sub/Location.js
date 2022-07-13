import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Location() {
	const { kakao } = window;
	const info = [
		{
			title: '언더프레셔 삼성 본점',
			latlng: new kakao.maps.LatLng(37.51415882109348, 127.06407736804755),
			imgUrl: `${process.env.PUBLIC_URL}/img/coffee.png`,
			imgSize: new kakao.maps.Size(80, 80),
			imgPos: { offset: new kakao.maps.Point(40, 80) },
			img: `${process.env.PUBLIC_URL}/img/underpressure.jpg`,
			address: '서울 강남구 영동대로 106길 37',
			tel: '02-2019-8990',
			time: 'MON-FRI 08:30~19:00 / SAT-SUN 10:30~18:30 (LAST ORDER 18:30)',
			park: '주차가능',
		},
		{
			title: '삼성동 코엑스',
			latlng: new kakao.maps.LatLng(37.5126964707762, 127.06070547684942),
			imgUrl: `${process.env.PUBLIC_URL}/img/balloons.png`,
			imgSize: new kakao.maps.Size(80, 80),
			imgPos: { offset: new kakao.maps.Point(40, 80) },
			img: `${process.env.PUBLIC_URL}/img/coex.jpg`,
			address: '서울 강남구 영동대로 513',
			tel: '02-6000-0114',
			time: 'MON-SUN 10:00~18:00 비고(행사 종료시간 상이)',
			park: '주차가능',
		},
		{
			title: '소전서림(유료 도서관)',
			latlng: new kakao.maps.LatLng(37.52364138030701, 127.05620912952872),
			imgUrl: `${process.env.PUBLIC_URL}/img/books.png`,
			imgSize: new kakao.maps.Size(80, 80),
			imgPos: { offset: new kakao.maps.Point(40, 80) },
			img: `${process.env.PUBLIC_URL}/img/sojeonseolim.png`,
			address: '서울 강남구 영동대로 138길 23 지하1층',
			tel: '02-542-0804',
			time: 'TUE-THU 11:00~21:00 / SUN 11:00~18:00 / MON(정기휴무)',
			park: '주차가능',
		},
	];
	const container = useRef(null);
	const btns = useRef(null);
	const [Location, setLocation] = useState(null);
	const [Traffic, setTraffic] = useState(false);
	const [Info, setInfo] = useState(info);
	const [Index, setIndex] = useState(0);

	const option = {
		center: Info[Index].latlng,
		level: 2,
	};

	const markerPosition = Info[Index].latlng;
	const imageSrc = Info[Index].imgUrl;
	const imageSize = Info[Index].imgSize;
	const imageOption = Info[Index].imgPos;

	const markerImage = new kakao.maps.MarkerImage(
		imageSrc,
		imageSize,
		imageOption
	);

	const marker = new kakao.maps.Marker({
		position: markerPosition,
		image: markerImage,
	});

	useEffect(() => {
		container.current.innerHTML = '';

		const map_instance = new kakao.maps.Map(container.current, option);
		marker.setMap(map_instance);
		setLocation(map_instance);

		const handleResize = () => {
			map_instance.setCenter(Info[Index].latlng);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};

		// for (const btn of btns.current.children) btn.classList.remove('on');
		// btns.current.children[Index].classList.add('on');
	}, [Index]);

	useEffect(() => {
		if (!Location) return;
		Traffic
			? Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic]);

	return (
		<Layout name={'Location'}>
			<div className='box1'>
				<p>Location</p>
				<FontAwesomeIcon icon={faArrowDown} />
			</div>
			<div id='map' ref={container}></div>
			<div className='btnSet'>
				<button onClick={() => setTraffic(!Traffic)}>
					{Traffic ? '교통정보 끄기' : '교통정보 켜기'}
				</button>

				{/* <ul className='branch'>
					<li onClick={() => setIndex(0)}>
						<div className='wrap'>
							<img src={info[0].img} alt='' />
							언더프레셔
						</div>
					</li>
					<li onClick={() => setIndex(1)}>삼성동 코엑스</li>
					<li onClick={() => setIndex(2)}>소전서림</li>
				</ul> */}

				<ul className='branch' ref={btns}>
					{info.map((info, idx) => {
						let on = '';
						Index === idx ? (on = 'on') : (on = '');
						return (
							<li key={idx} onClick={() => setIndex(idx)} className={on}>
								<div className='wrap'>
									<img src={info.img} alt='' />
									<div className='txt'>
										<h2>{info.title}</h2>
										<p>
											<strong>ADDRESS</strong>:{info.address}
										</p>
										<p>
											<strong>TEL</strong>:{info.tel}
										</p>
										<p>
											<strong>TIME</strong>: {info.time}
										</p>
										<p>
											<strong>PARKING</strong>:{info.park}
										</p>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</Layout>
	);
}

export default Location;
