import { IProject } from 'constants/projectList';
import { Variants, motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ProjectModal } from './ProjectModal';
import { Button } from './common/Button';
import { TechStacks } from './common/TechStacks';

interface RootProps {
  $imgUrl: string;
}
const Root = styled(motion.div)<RootProps>`
  height: 300px;
  background-color: white;
  border-radius: 10px;
  background-image: url(${props => props.$imgUrl});
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

const ButtonWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 50px;
`;
const LearnButton = styled(Button)`
  width: 100%;
  height: 100%;
`;

const TriggeredRootVar: Variants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
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
  index: number;
}

export const ProjectCard = ({
  imgUrlList,
  title,
  techStacks,
  index,
}: ProjectCardProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const isEven = index % 2 === 1;

  return (
    <Root
      $imgUrl={imgUrlList[0]}
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
          <TechStacks techStacks={techStacks} />
        </Container>
        <ButtonWrapper variants={ButtonVar}>
          <LearnButton onClick={openModal}>Learn More</LearnButton>
        </ButtonWrapper>
      </TriggeredRoot>
      <ProjectModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        index={index}
      />
    </Root>
  );
};
