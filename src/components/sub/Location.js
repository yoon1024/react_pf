import Layout from '../common/Layout';
import { useRef, useEffect } from 'react';

function Location() {
	const { kakao } = window;
	const container = useRef(null);
	const option = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 3,
	};

	//마커 이미지 변경에 필요한 3 정보 등록
	const imageSrc = `${process.env.PUBLIC_URL}/img/coffee.png`;
	const imageSize = new kakao.maps.Size(428, 494);
	const imageOption = { offset: new kakao.maps.Point(214, 247) };

	//위으 정보값을 토대로 마커 이미지 인스턴스 생성
	const markerImage = new kakao.maps.MarkerImage(
		imageSrc,
		imageSize,
		imageOption
	);

	const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
	const marker = new kakao.maps.Marker({
		position: markerPosition,
		image: markerImage,
	});

	useEffect(() => {
		const map_instance = new kakao.maps.Map(container.current, option);
		marker.setMap(map_instance);
	}, []);

	return (
		<Layout name={'Location'}>
			<div id='map' ref={container}></div>
		</Layout>
	);
}

export default Location;
