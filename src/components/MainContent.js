import React from 'react';
import styled from 'styled-components';

function MainContent() {
    return (
        <Main>
            <Viewer>
                
            </Viewer>
        </Main>
    );
}

const Main = styled.div`
    width: 80%;
    height: 86vh;
    background-color: var(--bgColor);
    margin-left: 20%;
    padding-right: 2rem;
`;

const Viewer = styled.div`
    height: 100%;
    width: 100%;
    background-color: var(--black);
    border-radius: 1rem;
`;

export default MainContent;
