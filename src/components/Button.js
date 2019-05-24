import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4 rem;
    background: transparent;
    border: 0.05rem solid var(--mainWhite);
    border-color: ${props => props.cart? "Green":"transparent"};
    color: ${props => props.cart? "Green":"Gray"};
    border-radius: 0.5rem;
    padding: 1rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 05.rem;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: ${props => props.cart? "#c6c9c5fb":"transparent"};
    }
    &:focus{
        outline: none;
    }
`;
