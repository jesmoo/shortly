import React from 'react'
import { HeaderContainer } from './Header.style';

import Workspace from '../../assets/icons/illustration-working.svg'

const Header = () => {
  return (
		<HeaderContainer>
				<h1>Shortly</h1>
			<img src={Workspace} alt='Working' />
		</HeaderContainer>
  );
}

export default Header
