import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

function MainContent({markdown}) {
    return (
        <Main>
            <Viewer>
                <ReactMarkdown>
                    {markdown}
                </ReactMarkdown>
            </Viewer>
        </Main>
    );
}

const Main = styled.div`
    width: 82%;
    height: 86vh;
    background-color: var(--bgColor);
    margin-left: 18%;
    padding-right: 2rem;
`;

const Viewer = styled.div`
    height: 100%;
    width: 100%;
    background-color: var(--editorColor);
    overflow-y: auto;
    padding: 1rem 2rem;
    border: 1px solid var(--secondaryColor);

    * {
        margin-top: 1rem;
        line-height: 1.5rem;
    }

    h1, h2 {
        line-height: 2.5rem;
        border-bottom: 1px solid var(--secondaryColor);
        padding-bottom: 1rem;
    }

    pre {
        border: 1px solid var(--secondaryColor);
        padding: 1rem;
        font-size: 1rem;
        background-color: var(--bgColor);
        overflow: auto;
    }
`;

export default MainContent;
