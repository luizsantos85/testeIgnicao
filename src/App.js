import React from 'react';
import GlobalStyle, { Container, PageBody } from './GlobalStyled';

import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import MenuVertical from './components/Menu/MenuVertical';
import MenuTopo from './components/Menu/MenuTopo';

function App() {
  const name = useSelector((state) => state.user.name);
  const status = useSelector((state) => state.user.status);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <MenuVertical />

        <PageBody>
          <MenuTopo name={name} status={status} />
          <Routes />
        </PageBody>
      </Container>
    </BrowserRouter>
  );
}

export default App;
