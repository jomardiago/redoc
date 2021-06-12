import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container from './components/Container';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Container>
        <MainContent />
        <Footer />
      </Container>
    </>
  );
}

export default App;
