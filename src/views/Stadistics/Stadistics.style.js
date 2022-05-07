import styled from 'styled-components';

const Section = styled.section`
    box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: hsl(0, 0%, 75%);
    text-align: center;
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
`;

const ShortContainer = styled.div`
    width: 100%;
    max-width: 260px;
	background-color: hsl(257, 27%, 26%);
    padding: 18px 24px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    input{
        padding: 6px;
        border-radius: 8px;
        margin-bottom: 10px;
        border: none;
    }

    h2{
        color: white;
    }
`;

const AdvancedStatistics = styled.div`
	h2 {
		color: black;
		margin: 0;
		margin-bottom: 24px;
	}
	p {
		margin: 0;
	}
`;

export { Section, Title, Button, ShortContainer, AdvancedStatistics };
