import React, { useState } from 'react';

import { Section, Button, ShortContainer, TextErrors, TextURL,ContainerCard, AdvancedStatistics } from './Stadistics.style';
import Cards from '../../components/Cards';

import card1 from '../../assets/icons/icon-brand-recognition.svg'
import card2 from '../../assets/icons/icon-detailed-records.svg'
import card3 from '../../assets/icons/icon-fully-customizable.svg'

const axios = require('axios');

const Stadistics = () => {
	const BASE_URL = 'https://api.shrtco.de/v2/';
	const ROUTE = 'shorten';
	const ACTION = '?url=';

	const [urls, setUrls] = useState('');
	const [erros, setErrors] = useState('');
	const [urlShorted, setUrlShorted] = useState('');

	const handleChange = (event) => {
		const value = event.target.value;
		setUrls(value);
	};

	const handleSend = async (event) => {
		event.preventDefault();

		if(urls.split('').length < 5){
			setErrors('Ingrese una URL valida');
			return;
		}

		const API_URL = `${BASE_URL}${ROUTE}${ACTION}${urls}`;

		await axiosSend(API_URL);
	};

	const axiosSend = async ( URLAPI ) => {
		setErrors('');

		try {
			const response = await axios.get(URLAPI);
			const { data } = response;
			const { result } = data;
			const { full_short_link } = result;

			setUrlShorted(full_short_link);
			return full_short_link;
		} catch (error) {
			throw new Error(error);
		}
	};

	return (
		<Section>
			<ShortContainer id='shorter'>
				<input value={urls} onChange={handleChange} type='text' />
				<Button onClick={handleSend}>Shorten it!</Button>
				{erros && <TextErrors>{erros}</TextErrors>}
			</ShortContainer>
			{urlShorted && (
				<TextURL>
					<p>
						Tu Url: <span>{urls}</span>
					</p>
					<p>
						Resultado: <span>{urlShorted}</span>
					</p>
				</TextURL>
			)}
			<AdvancedStatistics>
				<h2>Advanced Statistics</h2>
				<p>
					Track how your links are performing across the web with our advanced statistics
					dashboard
				</p>
			</AdvancedStatistics>

			<ContainerCard>
				<Cards
					url={card1}
					titles='Brand Recognition'
					texts='Boost your brand recognition with each click. Generic links don´t mean a thing. Branded links help instil confidence in your content.'
				/>
				<Cards
					url={card2}
					titles='Detailed Records'
					texts='Gain insights into  who is clicking your links. Knowing when and where people engage with your content helps informer better decisions.'
				/>
				<Cards
					url={card3}
					titles='Fully Customizable'
					texts='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
				/>
			</ContainerCard>
			<ShortContainer>
				<h2>Boost your links today</h2>
				<Button>
					<a href='#shorter'>Get Started</a>
				</Button>
			</ShortContainer>
		</Section>
	);
};

export default Stadistics;
