import React from 'react'
import { FooterContainer, LinksContainer } from './Footer.styled';

const Footer = () => {
  return (
		<FooterContainer>
			<h2>Shortly</h2>
			<LinksContainer>
				<a href='https://github.com/jesmoo'>Github</a>
				<a href='https://www.instagram.com/_jesmoo/'>Instagram</a>
				<a href='https://jesmoo.xyz/'>Portafolio</a>
			</LinksContainer>
		</FooterContainer>
  );
}

export default Footer;