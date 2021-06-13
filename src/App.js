import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container from './components/Container';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import LoggerNotes from './documents/LoggerNotes.md';

const documents = [
  {id: 'loggerNotes', markdown: LoggerNotes}
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
