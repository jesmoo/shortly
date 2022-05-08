import styled from 'styled-components';

const ContainerCard = styled.div`
	max-width: 290px;
	background-color: #fff;
    position: relative;
    padding: 10px 16px;
    padding-top: 40px;
    margin-top: 90px;

	img{
        width: 80px;
        height: 80px;
        position: absolute;
        top: -40px;
        left: calc(50% - 40px);
        border-radius: 100%;
    }
    h2 {
		color: black;
	}
`;

export { ContainerCard };