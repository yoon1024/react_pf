import { Route, Switch } from 'react-router-dom';
import { fetchYoutube } from './redux/youtubeSlice';
import { fetchFlickr } from './redux/flickrSlice';
import { fetchMembers } from './redux/memberSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Layout from './components/common/Layout';

//main
import Visual from './components/main/Visual';
import News from './components/main/News';
import Section_coffee from './components/main/Section_coffee';
import Section_dessert from './components/main/Section_dessert';
import Section_shop from './components/main/Section_shop';

import Main from './components/main/Main';

//sub
import Department from './components/sub/Department';
import Youtube from './components/sub/Youtube';
import Location from './components/sub/Location';
import Community from './components/sub/Community';
import Gallery from './components/sub/Gallery';
import Members from './components/sub/Members';

import './scss/style.scss';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMembers());
		dispatch(fetchYoutube());
		dispatch(fetchFlickr({ type: 'interest' }));
	}, []);
	return (
		<>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/department' component={Department} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/location' component={Location} />
			<Route path='/community' component={Community} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/members' component={Members} />

			<Footer />
		</>
	);
}

export default App;
