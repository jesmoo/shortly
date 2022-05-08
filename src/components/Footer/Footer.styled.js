import styled from 'styled-components';

const FooterContainer = styled.footer`
	width: 100%;
	background-color: hsl(257, 7%, 63%);
	padding: 10px 0;
	color: white;

	h2 {
		width: 100%;
		text-align: center;
		margin: 0;
	}
`;

const LinksContainer = styled.div`
	max-width: 290px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;

	a {
		text-decoration: none;
		color: white;
		margin-top: 10px;
	}
`;

export { FooterContainer, LinksContainer };
