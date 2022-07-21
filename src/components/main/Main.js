import Header from '../common/Header';
import Visual from './Visual';
import News from './News';
import Section_coffee from './Section_coffee';
import Section_dessert from './Section_dessert';
import Section_shop from './Section_shop';
import Btns from './Btns';

import { useEffect, useRef, useState } from 'react';
import Anime from '../../asset/anim';

function Main() {
	const main = useRef(null);
	const pos = useRef([]);
	const [Index, setIndex] = useState(0);
	let secs = null;

	const getPos = () => {
		pos.current = [];
		secs = main.current.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
		// console.log(pos.current);
	};

	const activation = () => {
		const base = -150;
		const scroll = window.scrollY;
		const btns = main.current.querySelectorAll('.scroll_navi li');

		pos.current.map((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				for (const sec of secs) sec.classList.remove('on');
				btns[idx].classList.add('on');
				secs[idx].classList.add('on');
			}
		});
	};

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);
		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);

	useEffect(() => {
		new Anime(window, {
			prop: 'scroll',
			value: pos.current[Index],
			duration: 500,
		});
	}, [Index]);

	return (
		//useRef로 참조하기 위해 main으로 감싼다
		//useRef로 참조하면 main 안쪽에 있는 내용들은 쿼리셀렉터로 접근할 수 있으니
		//main요소를 useRef로 참조한 다음 참도된 객체에서 쿼리셀렉터ALL로 공통class 'myscroll'을 전부 찾을 수 있다
		<main ref={main}>
			<Header type={'main'} />
			<Visual />
			<News />
			<Section_dessert />
			<Section_coffee />
			<Section_shop />
			<Btns setIndex={setIndex} />
		</main>
	);
}

export default Main;
