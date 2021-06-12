import React from 'react';
import styled from 'styled-components';

function Button({children}) {
    return (
        <ButtonStyled>
            {children}
        </ButtonStyled>
    );
}

const ButtonStyled = styled.button`
    padding: .8rem 2rem;
    font-size: 1rem;
    border: none;
    border-radius: .5rem;
    font-weight: 700;
    background-color: var(--orange);
    color: var(--white);
    width: 200px;
    cursor: pointer;

    :hover {
        background-color: var(--blue);
        color: var(--black);
    }
`;

export default Button;
