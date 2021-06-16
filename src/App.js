import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container from './components/Container';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import roStory from './documents/log4js-masking/roStory.md';
import assumptions from './documents/log4js-masking/assumptions.md';
import commonLogFormats from './documents/log4js-masking/commonLogFormats.md';
import solution from './documents/log4js-masking/solution.md';
import exampleMessage from './documents/log4js-masking/exampleMessage.md';

const documents = [
  {id: 'roStory', markdown: roStory},
  {id: 'assumptions', markdown: assumptions},
  {id: 'commonLogFormats', markdown: commonLogFormats},
  {id: 'solution', markdown: solution},
  {id: 'exampleMessage', markdown: exampleMessage},
];

function App() {
  const [theme, setTheme] = React.useState('light-theme');
  const [markdown, setMarkdown] = React.useState();

  React.useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  function displayDocument(id) {
    const document = documents.find(doc => doc.id === id);
    fetch(document.markdown).then(res => {
        return res.text();
    }).then(text => {
        setMarkdown(text);
    });
 }

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Sidebar displayDocument={displayDocument} />
      <Container>
        <MainContent markdown={markdown} />
        <Footer />
      </Container>
    </>
  );
}

export default App;
