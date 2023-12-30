import React from 'react';
import styled from 'styled-components';
import { Banner } from './components/Banner';
import { Variants, motion } from 'framer-motion';
import { AboutMe } from 'components/AboutMe';
import { Projects } from 'components/Projects';
import { Header } from 'components/Header';
import { Contact } from 'components/Contact';
import { Footer } from 'components/Footer';

const Root = styled.div`
  position: relative;
  overflow-x: hidden;
`;
function App() {
  return (
    <Root>
      <Header />
      <Banner />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </Root>
  );
}

export default App;
