import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
	const active = { color: '#2779a4' };
	const path = process.env.PUBLIC_URL;
	return (
		<header className={props.type}>
			<div className='inner'>
				<div className='pic'>
					<NavLink exact to='/'>
						<img src={`${path}/img/logo.png`} alt='로고' />
					</NavLink>
				</div>

				<ul id='gnb'>
					<li>
						<NavLink to='/department' activeStyle={active}>
							Department
						</NavLink>
					</li>
					<li>
						<NavLink to='/gallery' activeStyle={active}>
							Gallery
						</NavLink>
					</li>
					<li>
						<NavLink to='/youtube' activeStyle={active}>
							Youtube
						</NavLink>
					</li>
					<li>
						<NavLink to='/community' activeStyle={active}>
							Community
						</NavLink>
					</li>
					<li>
						<NavLink to='/location' activeStyle={active}>
							Location
						</NavLink>
					</li>
					<li>
						<NavLink to='/members' activeStyle={active}>
							Members
						</NavLink>
					</li>
				</ul>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</div>
		</header>
	);
}

export default Header;
