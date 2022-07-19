import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Section_coffee from './Section_coffee';
import Section_dessert from './Section_dessert';
import Section_shop from './Section_shop';
import Btns from './Btns';

import { useEffect, useRef } from 'react';
import Anime from '../../asset/anim';

function Main() {
	const main = useRef(null);
	const pos = useRef([]);

	const getPos = () => {
		pos.current = [];
		const secs = main.current.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
		console.log(pos.current);
	};

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);
		return () => {
			window.removeEventListener('resize', getPos);
		};
	}, []);

	return (
		//useRef로 참조하기 위해 main으로 감싼다
		//useRef로 참조하면 main 안쪽에 있는 내용들은 쿼리셀렉터로 접근할 수 있으니
		//main요소를 useRef로 참조한 다음 참도된 객체에서 쿼리셀렉터ALL로 공통class 'myscroll'을 전부 찾을 수 있다
		<main ref={main}>
			<Header type={'main'} />
			<Visual />
			<News />
			<Section_coffee />
			<Section_dessert />
			<Section_shop />
			<Btns />
		</main>
	);
}

export default Main;
