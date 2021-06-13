import React from 'react';
import styled from 'styled-components';
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <FooterStyled>
            <FooterTag>JoseCodes <FaGithub /></FooterTag>
        </FooterStyled>
    );
}

const FooterStyled = styled.div`
    text-align: center;
    width: 82%;
    height: 7vh;
    background-color: var(--bgColor);
    margin-left: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FooterTag = styled.h4`
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        margin-left: .5rem;
        fill: var(--secondaryColor);
    }
`;

export default Footer;
