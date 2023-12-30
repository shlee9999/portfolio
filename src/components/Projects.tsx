import styled from 'styled-components';
import { ProjectItemCard } from './ProjectItemCard';
import { Title } from './Title';
import { Variants, motion } from 'framer-motion';

const Root = styled(motion.div)`
  background-color: #00a1a7;
  padding: 50px 20% 50px 20%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
`;
const RootVar: Variants = {
  start: {},
  end: {
    transition: {
      delayChildren: 0.2,
    },
  },
};
export const Projects = () => {
  return (
    <Root variants={RootVar} id="Projects">
      <Title>Projects</Title>
      <Cards>
        <ProjectItemCard />
        <ProjectItemCard isEven />
        <ProjectItemCard />
        <ProjectItemCard isEven />
        <ProjectItemCard />
        <ProjectItemCard isEven />
      </Cards>
    </Root>
  );
};
