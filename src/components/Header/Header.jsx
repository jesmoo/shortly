import React from 'react'
import { HeaderContainer } from './Header.style';

import Workspace from '../../assets/icons/illustration-working.svg'
import {
	Title,
	Button,
} from '../../views/Stadistics/Stadistics.style';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
		<HeaderContainer>
			<section>
				<h1>Shortly</h1>
				<img src={Workspace} alt='Working' />
			</section>

			<section>
				<Title>More than just shorter links</Title>
				<p>
					Build your brand s recognition and get detalled insights on how youl links are
					performing.
				</p>
				<Button>
					<Link to='/#shorter'>Get Started</Link>
				</Button>
			</section>
		</HeaderContainer>
  );
}

export default Header
