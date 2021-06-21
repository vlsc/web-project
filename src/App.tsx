import React from 'react'
import GlobalStyle from './styles/global';
import  Sidebar  from './components/Sidebar/index';
import { Container, LateralDiv } from './components/Divs/styles';
import Side from './components/Side/index';
import MainDiv from './components/Divs/Main';
import AppProvider from './context/Provider';

function App() {
  return (
    <AppProvider>
      <Container>
        <GlobalStyle />
        <LateralDiv>
          <Side />
          <Sidebar />
        </LateralDiv>
        <MainDiv />
      </Container>
    </AppProvider>
    
  );
}

export default App;
