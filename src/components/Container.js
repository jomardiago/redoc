import React from 'react';
import styled from 'styled-components';

function Container({children}) {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    );
}

const ContainerStyled = styled.div`
    width: 100%;
    height: 93vh;
    background-color: var(--white);
`;

export default Container;
