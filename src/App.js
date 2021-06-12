import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container from './components/Container';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = React.useState('dark-theme');

  React.useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Sidebar />
      <Container>
        <MainContent />
        <Footer />
      </Container>
    </>
  );
}

export default App;
