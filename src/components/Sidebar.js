import React from 'react';
import styled from 'styled-components';
import Button from './Button';

function Sidebar({displayDocument}) {
    return (
        <SideBarStyled>
            <SidebarHeader>Documentations</SidebarHeader>
            <SidebarList>
                <Button onClick={() => displayDocument('roStory')}>RO Story</Button>
                <Button onClick={() => displayDocument('assumptions')}>Only Assumption</Button>
                <Button onClick={() => displayDocument('commonLogFormats')}>Common Formats</Button>
                <Button onClick={() => displayDocument('solution')}>Solution</Button>
            </SidebarList>
        </SideBarStyled>
    );
}

const SideBarStyled = styled.div`
    width: 18%;
    height: 93vh;
    position: fixed;
    background-color: var(--bgColor);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    text-align: center;
`;

const SidebarHeader = styled.h1`
    font-size: 1.2rem;
`;

const SidebarList = styled.div`
    height: 100%;
    width: 100%;

    button {
        margin-top: 1.5rem;
    }
`;

export default Sidebar;
