import { combineReducers } from 'redux';

const initMember = {
	members: [
		{
			name: 'Stella',
			position: 'Cashier',
			pic: 'member1.jpg',
		},
		{
			name: 'Noah',
			position: 'Barista',
			pic: 'member2.jpg',
		},
		{
			name: 'Henry',
			position: 'Barista',
			pic: 'member3.jpg',
		},
		{
			name: 'Oliver',
			position: 'Barista',
			pic: 'member4.jpg',
		},
		{
			name: 'Sevastian',
			position: 'Cashier',
			pic: 'member5.jpg',
		},
		{
			name: 'Luca',
			position: 'Barista',
			pic: 'member6.jpg',
		},
		{
			name: 'Leo',
			position: 'Barista',
			pic: 'member7.jpg',
		},
		{
			name: 'Ava',
			position: 'Barista',
			pic: 'member8.jpg',
		},
	],
};

const memberReducer = (state = initMember, action) => {
	switch (action.type) {
		case 'SET_MEMBERS':
			return {
				...state,
				members: action.payload,
			};
		default:
			return state;
	}
};
const reducers = combineReducers({
	memberReducer,
});

export default reducers;
