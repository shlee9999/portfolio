import React from 'react';
import styled from 'styled-components';
import { Banner } from './components/Banner';
import { Variants, motion } from 'framer-motion';
import { AboutMe } from 'components/AboutMe';
import { Projects } from 'components/Projects';

const Root = styled(motion.div)``;
const RootVariant: Variants = {
  start: {
    opacity: 0,
    y: 20,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
function App() {
  return (
    <Root variants={RootVariant} initial="start" animate="end">
      <Banner />
      <AboutMe />
      <Projects />
    </Root>
  );
}

export default App;
