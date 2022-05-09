import styled from 'styled-components';

const HeaderContainer = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px;

	h1 {
		font-size: 40px;
		margin: 10px;
		margin-bottom: 16px;
	}

	img {
		width: 100%;
		max-width: 500px;
	}

	@media (min-width: 1024px) {
		& {
			flex-direction: row;
			justify-content: center;
		}

		section{
			margin: 10px;
			max-width: 500px
		}
	}
`;

export { HeaderContainer };