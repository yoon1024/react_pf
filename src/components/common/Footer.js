import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faTwitter,
	faYoutube,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer>
			<div className='inner'>
				<div className='title'>
					<h3>
						Join Divi Today.
						<br />
						Getting More Done
						<br />
						Together.
					</h3>
				</div>
				<ul>
					<li>
						<p>
							<strong>Address</strong>
							<br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
							possimus.
						</p>
					</li>
					<li>
						<p>
							<strong>Phone Number</strong>
							<br />
							1599-2681
						</p>
						<p>
							<strong>E-mail</strong>
							<br />
							store@handium.co.kr
						</p>
					</li>
					<li>
						<p>Follow</p>
						<div className='icon'>
							<FontAwesomeIcon icon={faFacebookF} />
							<FontAwesomeIcon icon={faTwitter} />
							<FontAwesomeIcon icon={faYoutube} />
							<FontAwesomeIcon icon={faInstagram} />
						</div>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
