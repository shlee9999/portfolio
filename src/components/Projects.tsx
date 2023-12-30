import styled from 'styled-components';
import { ProjectCard } from './ProjectCard';
import { Title } from './Title';
import { Variants, motion } from 'framer-motion';
import { projectList } from 'constants/projectList';

const Root = styled(motion.div)`
  background-color: #f5f5f5;
  padding: 70px 20% 50px 20%;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
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
        {projectList.map((project, index) => (
          <ProjectCard {...project} isEven={index % 2 == 1} />
        ))}
      </Cards>
    </Root>
  );
};
