import styled from 'styled-components';

const ContactContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;

    button{
        background-color: hsl(180, 66%, 49%);
        padding: 10px 18px;
        border-radius: 16px;
        border: none;
        color: white;
        font-weight: 700;
        margin-top: 20px;

        &:active {
            transform: scale(0.85);
        }

        a {
            text-decoration: none;
            color: white;
        }
    }
`;

export { ContactContainer };