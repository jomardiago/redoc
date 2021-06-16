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
  {id: 'roStory', title: 'RO Story', markdown: roStory},
  {id: 'assumptions', title: 'Only Assumption', markdown: assumptions},
  {id: 'commonLogFormats', title: 'Log Formats', markdown: commonLogFormats},
  {id: 'solution', title: 'Solution', markdown: solution},
  {id: 'exampleMessage', title: 'Example', markdown: exampleMessage}
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
      <Sidebar displayDocument={displayDocument} documents={documents} />
      <Container>
        <MainContent markdown={markdown} />
        <Footer />
      </Container>
    </>
  );
}

export default App;
