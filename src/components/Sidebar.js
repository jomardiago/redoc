import React from 'react';
import styled from 'styled-components';
import Button from './Button';

function Sidebar({displayDocument, documents}) {
    return (
        <SideBarStyled>
            <SidebarHeader>Documentations</SidebarHeader>
            <SidebarList>
                {
                    documents.map(doc => (
                        <Button onClick={() => displayDocument(doc.id)}>{doc.title}</Button>
                    ))
                }
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
