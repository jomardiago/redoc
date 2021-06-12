import React from 'react';
import styled from 'styled-components';
import Button from './Button';

function Sidebar() {
    return (
        <SideBarStyled>
            <SidebarHeader>Documentations</SidebarHeader>
            <SidebarList>
                <Button>Log4js Context ID</Button>
                <Button>Log4js Masking</Button>
                <Button>Zero Day Script</Button>
                <Button>New Entitlement</Button>
                <Button>Audit Log</Button>
            </SidebarList>
        </SideBarStyled>
    );
}

const SideBarStyled = styled.div`
    width: 20%;
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
