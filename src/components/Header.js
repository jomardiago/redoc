import React from 'react';
import styled from 'styled-components';
import { FaSun, FaBookOpen } from "react-icons/fa";

function Header() {
    return (
        <HeaderStyled>
            <Brand><span className="brand-re">Re</span><span className="brand-doc">Doc</span><FaBookOpen /></Brand>
            <FaSun />
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    width: 100%;
    height: 7vh;

    svg {
        font-size: 1.3rem;
        fill: var(--orange);
        cursor: pointer;

        :hover {
            fill: var(--blue);
        }
    }
`;

const Brand = styled.h1`
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .brand-re {
        color: var(--blue);
    }

    .brand-doc {
        color: var(--orange);
    }

    svg {
        fill: var(--white);
        margin-left: .5rem;
    }
`;

export default Header;