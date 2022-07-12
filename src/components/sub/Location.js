import Layout from '../common/Layout';
//api 서버통신은 컴포넌트가 마운트가 되어야 함
//왜냐하면 웹 api라고 해서 액시오스나 외부 데이터 불러오는 건 스크립트가 하는 게 아니라 브라우저가 하기 때문
//컴포넌트가 처음 마운트 되었을 때 어떤 구문을 실행하게 해 주는 의존성 배열이 비어 있는 useEffect가 필요
//지도가 출력될 어떤 프레임을 집어넣어야 되는데 기존에는 document.getElememtBtId('map')을 이용해서 했지만
//리액트에서는 getElememtBtId, document.qurreySelector 같은 걸 쓰면 안 됨
//그래서 dom을 제어하기 위해 useRef를 이용해 특정 제어활동을 참조객체로 만들어야 함
import { useRef, useEffect } from 'react';

function Location() {
	//지도가 들어갈 프레임이 필요한데 useRef(null)처럼 빈 참조객체를 만들어 놓고 실제 지도가 들어갈 프레임을 만들어야 되기 때문에  map이라는 id를 가진 div를 만들어 준다
	//만들어 주고 div 안에 참조객체를 담아서 참조해 앞으로 제어할 것
	//앞으로 container.current 해서 id가 map인 div를 참조해서 다양하게 호출하거나 제어할 수 있음
	const container = useRef(null);
	const option = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 3,
	};
	// 두 개의 값을 만들었으니
	// var map = new kakao.maps.Map(container, option);
	// 이렇게 쓰면 앱이 바로 호출되는 구조이기 때문에 복사해서 그대로 쓰면 되지만
	// 차이점은 컴포넌트가 마운트 되는 시점에 호출을 해야 되는 거니
	//useEffect를 사용
	useEffect(() => {
		new kakao.maps.Map(container, option);
		//따로 이 값을 활용할 게 아니기 때문에 var map = 어쩌구 하고 값을 따로 저장할 필요가 없어서 지움
	}, []);

	return (
		<Layout name={'Location'}>
			<div id='map' ref={container}></div>
		</Layout>
	);
}

export default Location;
