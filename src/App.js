import { Route, Switch } from 'react-router-dom';

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

//sub
import Members from './components/sub/Members';

import './scss/style.scss';
function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />
					<Visual />
				</Route>

				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>
			<Route path='/members' component={Members} />

			<Footer />
		</>
	);
}

export default App;
