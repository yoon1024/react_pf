import Layout from '../common/Layout';
import { useRef, useEffect } from 'react';

function Location() {
	const { kakao } = window;
	const container = useRef(null);
	const option = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 3,
	};

	const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

	const marker = new kakao.maps.Marker({
		position: markerPosition,
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
