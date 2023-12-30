import { Variants, motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Root = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const Typo = styled(motion.span)`
  text-align: center;
  font-size: 50px;
  font-weight: 900;
  text-transform: uppercase;
`;
const Line = styled(motion.hr)`
  margin: 0 auto;
  width: 50px;
  height: 3.5px;
  background-color: black;
`;
const RootVar: Variants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const TypoVar: Variants = {
  start: {
    x: -100,
    opacity: 0,
  },
  end: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.1,
    },
  },
};
const LineVar: Variants = {
  start: {
    x: 100,
    opacity: 0,
  },
  end: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.1,
    },
  },
};
interface TitleProps {
  children: ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Root
      variants={RootVar}
      initial="start"
      animate={isVisible ? 'end' : ''}
      ref={ref}
    >
      <Typo variants={TypoVar}>{children}</Typo>
      <Line variants={LineVar} />
    </Root>
  );
};
