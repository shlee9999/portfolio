import { IAboutCard } from 'constants/aboutCardList';
import { Variants, motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import styled from 'styled-components';

const Root = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-basis: 135px;
  flex-grow: 1;
  min-height: 200px;
`;

const CardImg = styled.img`
  height: 80px;
`;
const TypoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: 600;
`;
const Description = styled.p`
  text-align: center;
  padding: 0 20px;
  font-size: 16px;
  letter-spacing: 0.8px;
  font-weight: 300;
  line-height: 20px;
`;
const RootVar: Variants = {
  start: {
    opacity: 0,
    rotateY: 180,
  },
  end: {
    opacity: 1,
    rotateY: 360,
    transition: {
      type: 'tween',
      bounce: 0.6,
      duration: 1,
    },
  },
};
export const AboutCard = ({ title, description, imgUrl }: IAboutCard) => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <Root
      variants={RootVar}
      ref={ref}
      initial="start"
      animate={isVisible ? 'end' : 'start'}
    >
      <CardImg src={imgUrl} />
      <TypoContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TypoContainer>
    </Root>
  );
};
