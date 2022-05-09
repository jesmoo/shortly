import styled from 'styled-components';

const ContainerCard = styled.div`
	max-width: 290px;
	background-color: hsl(0, 0%, 95%);
	position: relative;
	padding: 10px 16px;
	padding-top: 40px;
	margin: 10px;
	margin-top: 90px;

	h2 {
		color: black;
	}

	&:hover {
		transform: scale(1.05);
	}
`;

const ImgContainer = styled.div`
	width: 80px;
	height: 80px;
	padding: 3px;
	position: absolute;
	top: -40px;
	left: calc(50% - 40px);
	border-radius: 100%;
	background-color: hsl(257, 27%, 26%);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 65%;
		height: 65%;
	}
`;

export { ContainerCard, ImgContainer };