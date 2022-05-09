import React from 'react'
import { ContainerCard, ImgContainer } from './Cards.style';

const Cards = ({ url = '',titles, texts }) => {
	return (
		<ContainerCard>
			<ImgContainer >
				<img src={url} alt='Imagen de ayuda' />
			</ImgContainer>
			<h2>{titles}</h2>
			<p>{texts}</p>
		</ContainerCard>
	);
};

export default Cards