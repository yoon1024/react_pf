import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';

function Location() {
	const { kakao } = window;
	const info = [
		{
			title: '언더프레셔 삼성 본점',
			latlng: new kakao.maps.LatLng(37.51415882109348, 127.06407736804755),
			imgUrl: `${process.env.PUBLIC_URL}/img/coffee.png`,
			imgSize: new kakao.maps.Size(80, 80),
			imgPos: { offset: new kakao.maps.Point(40, 80) },
		},
		{
			title: '삼성동 코엑스',
			latlng: new kakao.maps.LatLng(37.5126964707762, 127.06070547684942),
			imgUrl: `${process.env.PUBLIC_URL}/img/balloons.png`,
			imgSize: new kakao.maps.Size(80, 80),
			imgPos: { offset: new kakao.maps.Point(40, 80) },
		},
		{
			title: '소전서림(유료 도서관)',
			latlng: new kakao.maps.LatLng(37.52364138030701, 127.05620912952872),
			imgUrl: `${process.env.PUBLIC_URL}/img/books.png`,
			imgSize: new kakao.maps.Size(80, 80),
			imgPos: { offset: new kakao.maps.Point(40, 80) },
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
		level: 3,
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
			<div id='map' ref={container}></div>
			<div className='btnSet'>
				<button onClick={() => setTraffic(!Traffic)}>
					{Traffic ? 'Traffic OFF' : 'Traffic On'}
				</button>

				<ul className='branch' ref={btns}>
					{info.map((info, idx) => {
						let on = '';
						Index === idx ? (on = 'on') : (on = '');
						return (
							<li key={idx} onClick={() => setIndex(idx)}>
								{info.title}
							</li>
						);
					})}
				</ul>
			</div>
		</Layout>
	);
}

export default Location;
