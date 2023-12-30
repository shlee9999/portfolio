import { IProject } from 'constants/projectList';
import { Variants, motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { useState } from 'react';
import styled from 'styled-components';

interface RootProps {
  imgUrl: string;
}
const Root = styled(motion.div)<RootProps>`
  height: 300px;
  background-color: white;
  border-radius: 10px;
  background-image: url(${props => props.imgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.4);
  box-shadow: 2px 2px 5px;
`;
const TriggeredRoot = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 70px 0;
`;
const OddRootVar: Variants = {
  start: {
    opacity: 0,
    x: -10,
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
    x: 10,
  },
  end: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.p`
  text-align: center;
  font-size: 40px;
  font-weight: 800;
`;
const Button = styled(motion.p)`
  width: 60%;
  height: 50px;
  border: 1px solid #e31b6d;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #e31b6d;
    color: #eeeeee;
  }
  transition-property: background-color, color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  text-transform: uppercase;
  font-size: 25px;
`;
const TechStack = styled.span`
  color: #e31b6d;
  text-align: center;
  font-size: 20px;
  &:not(:last-child)::after {
    content: '/';
  }
`;
const TechStacks = styled.div`
  text-align: center;
`;
const TriggeredRootVar: Variants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
};
const ContainerVar: Variants = {
  start: {
    y: -10,
  },
  end: { y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const ButtonVar: Variants = {
  start: {
    y: 10,
  },
  end: { y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
interface ProjectCardProps extends IProject {
  isEven?: boolean;
}

export const ProjectCard = ({
  isEven,
  imgUrl,
  title,
  techStacks,
}: ProjectCardProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Root
      imgUrl={imgUrl}
      ref={ref}
      variants={isEven ? EvenRootVar : OddRootVar}
      initial="start"
      animate={isVisible ? 'end' : 'start'}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <TriggeredRoot
        variants={TriggeredRootVar}
        animate={isHovered ? 'end' : 'start'}
      >
        <Container variants={ContainerVar}>
          <Title>{title}</Title>
          <TechStacks>
            {techStacks.map(techStack => (
              <TechStack>{techStack}</TechStack>
            ))}
          </TechStacks>
        </Container>
        <Button variants={ButtonVar}>Learn More</Button>
      </TriggeredRoot>
    </Root>
  );
};
