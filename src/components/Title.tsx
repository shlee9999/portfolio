import { Variants, motion } from 'framer-motion';
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
  font-size: 30px;
  font-weight: 900;
  text-transform: uppercase;
`;
const Line = styled(motion.hr)`
  margin: 0 auto;
  width: 50px;
  height: 3.5px;
  background-color: black;
`;

interface TitleProps {
  children: ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const onScroll = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  const RootVar: Variants = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: isVisible ? 1 : 0,
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
      x: isVisible ? 0 : -100,
      opacity: isVisible ? 1 : 0,
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
      x: isVisible ? 0 : 100,
      opacity: isVisible ? 1 : 0,
      transition: {
        duration: 1.1,
      },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onScroll, { threshold: 0.1 });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);
  useEffect(() => {
    console.log(isVisible);
  }, [isVisible]);
  return (
    <Root variants={RootVar} initial="start" animate="end" ref={ref}>
      <Typo variants={TypoVar}>{children}</Typo>
      <Line variants={LineVar} />
    </Root>
  );
};
