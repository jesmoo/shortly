import React from 'react'
import { ContainerCard } from './Cards.style'

const Cards = ({ url,titles, texts }) => {
	return (
		<ContainerCard>
			<img
				src='https://pbs.twimg.com/profile_images/1146072983787724800/SElmsSlI_400x400.jpg'
				alt='Imagen de ayuda'
			/>
			<h2>{titles}</h2>
			<p>{texts}</p>
		</ContainerCard>
	);
};

export default Cards