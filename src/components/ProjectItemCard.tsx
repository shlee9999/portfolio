import { Variants, motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import styled from 'styled-components';

const Root = styled(motion.div)`
  height: 150px;
  background-color: tomato;
`;
const OddRootVar: Variants = {
  start: {
    opacity: 0,
    x: -7,
  },
  end: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
const EvenRootVar: Variants = {
  start: {
    opacity: 0,
    x: 7,
  },
  end: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
interface ProjectItemCardProps {
  isEven?: boolean;
}
export const ProjectItemCard = ({ isEven }: ProjectItemCardProps) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <Root
      ref={ref}
      variants={isEven ? EvenRootVar : OddRootVar}
      initial="start"
      animate={isVisible ? 'end' : 'start'}
    >
      ProjectItemCard
    </Root>
  );
};
