import React from 'react';
import styled from 'styled-components';

function Button({children, ...rest}) {
    return (
        <ButtonStyled {...rest}>
            {children}
        </ButtonStyled>
    );
}

const ButtonStyled = styled.button`
    padding: .8rem 2rem;
    font-size: 1rem;
    border: none;
    border-radius: .5rem;
    background-color: var(--secondaryColor);
    color: var(--textColor);
    width: 200px;
    cursor: pointer;
    outline: none;

    :hover {
        background-color: var(--primaryColor);
        color: var(--editorColor);
    }
`;

export default Button;
