import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlus,
	faArrowRightLong,
	faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import {
	faFacebookF,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

function Member() {
	const path = process.env.PUBLIC_URL;
	const [Members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/members.json`).then((json) => {
			setMembers(json.data.members);
		});
	}, []);

	return (
		<Layout name={'Members'}>
			<div className='box1'>
				<p>view more</p>
				<FontAwesomeIcon icon={faArrowDown} />
			</div>
			<div className='box2'>
				<FontAwesomeIcon icon={faPlus} />
				<p>Partnership</p>
			</div>
			{Members.map((member, idx) => {
				return (
					<article key={idx}>
						<div className='pic'>
							<div className='txt'>
								<h3>{member.name}</h3>
								<p>{member.position}</p>
							</div>
							<ul className='sns'>
								<li>
									<NavLink to='#'>
										<FontAwesomeIcon icon={faFacebookF} />
									</NavLink>
								</li>
								<li>
									<NavLink to='#'>
										<FontAwesomeIcon icon={faTwitter} />
									</NavLink>
								</li>
								<li>
									<NavLink to='#'>
										<FontAwesomeIcon icon={faInstagram} />
									</NavLink>
								</li>
							</ul>
							<img src={`${path}/img/${member.pic}`} alt={member.name} />
						</div>
					</article>
				);
			})}
			<div className='box3'>
				<h2>let's talk.</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum
					maiores omnis natus architecto placeat voluptates reiciendis pariatur
					neque earum, quae minus alias asperiores at, aut libero porro dolores
					delectus?
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
					ratione dignissimos unde exercitationem at vitae eaque quidem cum quos
					necessitatibus.
				</p>
				<NavLink to='#'>
					<FontAwesomeIcon icon={faArrowRightLong} />
				</NavLink>
			</div>
		</Layout>
	);
}

export default Member;