import React from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Banner } from './components/Banner';

const Root = styled.div``;
function App() {
  return (
    <Root>
      <Header />
      <Banner />
    </Root>
  );
}

export default App;
