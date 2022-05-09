import styled from 'styled-components';

const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	color: hsl(0, 0%, 55%);
	padding: 15px;
`;

const Title = styled.h1`
	color: black;
	font-size: 32px;
	font-weight: bold;
`;

const Button = styled.button`
	background-color: hsl(180, 66%, 49%);
	padding: 10px 18px;
	border-radius: 16px;
	border: none;
	color: white;
	font-weight: 700;
	margin-top: 20px;

    &:active{
        transform: scale(0.85);
    }

	a {
		text-decoration: none;
		color: white;
	}
`;

const ShortContainer = styled.div`
	width: 100%;
	max-width: 260px;
	background-color: hsl(257, 27%, 26%);
	padding: 18px 24px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	margin-top: 60px;

	input {
		padding: 8px;
		border-radius: 8px;
		margin-bottom: 10px;
		border: none;
	}

	h2 {
		color: white;
	}
`;

const TextErrors = styled.p`
	color: red;
`;

const TextURL = styled.div`
	color: black;
	text-align: center;

	span {
		color: hsl(0, 87%, 67%);
	}
`;

const ContainerCard = styled.div`
	display: flex;
	flex-direction: column;

	@media(min-width: 1024px) {
		& {
			flex-direction: row;
		}
	}
`;

const AdvancedStatistics = styled.div`
	margin-top: 60px;
	h2 {
		color: black;
		margin: 0;
		margin-bottom: 24px;
	}
	p {
		margin: 0;
	}
`;

export {
	Section,
	Title,
	Button,
	ShortContainer,
	TextErrors,
	TextURL,
	ContainerCard,
	AdvancedStatistics,
};
