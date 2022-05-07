import React from 'react';
import { Section, Title, Button, ShortContainer, AdvancedStatistics } from './Stadistics.style';

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

			<ShortContainer>
				<h2>Boost your links today</h2>
				<Button>Get Started</Button>
			</ShortContainer>
		</Section>
	);
};

export default Stadistics;
