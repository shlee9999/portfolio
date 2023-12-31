import { Variants, motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Root = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${props => props.color};
`;
const Typo = styled(motion.span)`
  text-align: center;
  font-size: 40px;
  font-weight: 900;
  text-transform: uppercase;
`;
const Line = styled(motion.hr)`
  margin: 0 auto;
  width: 50px;
  height: 4px;
  background-color: ${props => props.color};
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
  textColor?: string;
}

export const Title = ({ children, textColor }: TitleProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Root
      variants={RootVar}
      initial="start"
      animate={isVisible ? 'end' : ''}
      ref={ref}
      color={textColor ?? ''}
    >
      <Typo variants={TypoVar}>{children}</Typo>
      <Line variants={LineVar} color={textColor ?? 'black'} />
    </Root>
  );
};
