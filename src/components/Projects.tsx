import styled from 'styled-components';
import { ProjectItemCard } from './ProjectItemCard';
import { Title } from './Title';

const Root = styled.div`
  background-color: teal;
  padding: 30px 20% 30px 20%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
`;

export const Projects = () => {
  return (
    <Root id="Projects">
      <Title>Projects</Title>
      <Cards>
        <ProjectItemCard />
        <ProjectItemCard />
        <ProjectItemCard />
        <ProjectItemCard />
        <ProjectItemCard />
        <ProjectItemCard />
        <ProjectItemCard />
        <ProjectItemCard />
      </Cards>
    </Root>
  );
};
