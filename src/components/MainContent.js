import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import LoggerNotes from '../documents/LoggerNotes.md';

function MainContent() {
    const [markdown, setMarkdown] = React.useState();

    React.useEffect(() => {
        fetch(LoggerNotes).then(res => {
            return res.text();
        }).then(text => {
            setMarkdown(text);
        });
    }, []);

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
    overflow-y: scroll;
    padding: 1rem 2rem;
    border: 1px solid var(--secondaryColor);

    * {
        margin-top: 1rem;
        line-height: 1.5rem;
    }

    pre {
        border: 1px solid var(--primaryColor);
        padding: 1rem;
        border-radius: 1rem;
        font-size: 1rem;
        background-color: var(--bgColor);
    }
`;

export default MainContent;
