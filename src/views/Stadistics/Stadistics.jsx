import React from 'react';
import { Section, Title, Button, ShortContainer, AdvancedStatistics } from './Stadistics.style';

import Cards from '../../components/Cards';

const Stadistics = () => {
	return (
		<Section>
			<Title>More than just shorter links</Title>
			<p>
				Build your brand s recognition and get detalled insights on how youl links are
				performing.
			</p>
			<Button>Get Started</Button>
			<ShortContainer>
				<input type='text' />
				<Button>Shorten it!</Button>
			</ShortContainer>

			<AdvancedStatistics>
				<h2>Advanced Statistics</h2>
				<p>
					Track how your links are performing across the web with our advanced statistics
					dashboard
				</p>
			</AdvancedStatistics>

			<Cards
				titles='Brand Recognition'
				texts='Boost your brand recognition with each click. Generic links don´t mean a thing. Branded links help instil confidence in your content.'
			/>
			<Cards
				titles='Detailed Records'
				texts='Gain insights into  who is clicking your links. Knowing when and where people engage with your content helps informer better decisions.'
			/>
			<Cards
				titles='Fully Customizable'
				texts='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
			/>

			<ShortContainer>
				<h2>Boost your links today</h2>
				<Button>Get Started</Button>
			</ShortContainer>
		</Section>
	);
};

export default Stadistics;
