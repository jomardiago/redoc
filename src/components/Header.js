import React from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon, FaBookOpen } from "react-icons/fa";

function Header({theme, setTheme}) {
    function toggleTheme() {
        setTheme(theme === 'dark-theme' ? 'light-theme' : 'dark-theme');
    }

    return (
        <HeaderStyled>
            <Brand><span className="brand-re">Re</span><span className="brand-doc">Doc</span><FaBookOpen /></Brand>
            {
                theme === 'dark-theme' ? <FaSun onClick={toggleTheme} /> : <FaMoon onClick={toggleTheme} />
            }
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
        fill: var(--secondaryColor);
        cursor: pointer;

        :hover {
            fill: var(--primaryColor);
        }
    }
`;

const Brand = styled.h1`
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .brand-re {
        color: var(--primaryColor);
    }

    .brand-doc {
        color: var(--secondaryColor);
    }

    svg {
        fill: var(--textColor);
        margin-left: .5rem;
    }
`;

export default Header;