import React from 'react'
import { FooterContainer, LinksContainer } from './Footer.styled';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
		<FooterContainer>
			<h2>Shortly</h2>
			<LinksContainer>
				<Link to='/contact'>Contacto</Link>
				<a href='https://github.com/jesmoo'>Github</a>
				<a href='https://www.instagram.com/_jesmoo/'>Instagram</a>
				<a href='https://jesmoo.xyz/'>Portafolio</a>
			</LinksContainer>
		</FooterContainer>
  );
}

export default Footer;