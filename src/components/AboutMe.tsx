import styled from 'styled-components';
import { Header } from './Header';
import { techList } from 'constants/techList';
import { TechItem } from './TechItem';
import { Variants, motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { Title } from './Title';
import { AboutCard } from './AboutCard';
import { aboutCardList } from 'constants/aboutCardList';

const Root = styled.div`
  min-height: 100vh;
  padding-bottom: 30px;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  padding: 10px 10% 10px 10%;
`;

const ItemContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;
const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
// AboutItem 컴포넌트 만들기
const Item = styled.li``;

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
const Profile = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const ProfileImg = styled.div`
  background-color: tomato;
  height: 80%;
  width: 40%;
`; // background-image 사용
const ProfileTitle = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: 700;
`;
const ProfileDescription = styled.p`
  text-align: center;
  font-size: 12px;
`;
const TechStackContainer = styled(motion.div)`
  padding: 20px 30px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AboutMe = () => {
  const { ref, isVisible } = useScrollAnimation();
  const TechStackContainerVar: Variants = {
    start: {
      opacity: 0,
      x: 200,
    },
    end: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.3,
        delayChildren: 0.5,
        staggerChildren: isVisible ? 0.1 : undefined,
      },
    },
  };
  return (
    <Root id="AboutMe">
      <Wrapper>
        <Title>About</Title>
        <ItemContainer>
          <Items>
            <AboutCard {...aboutCardList[0]} />
            <AboutCard {...aboutCardList[1]} />
          </Items>
          <Items>
            <AboutCard {...aboutCardList[2]} />
            <AboutCard {...aboutCardList[3]} />
          </Items>
        </ItemContainer>
        <ProfileContainer ref={ref}>
          <Profile>
            <ProfileImg />
            <ProfileTitle>Who's this guy?</ProfileTitle>
            <ProfileDescription>
              I'm a Front-End Developer for ChowNow in Los Angeles, CA. <br /> I
              have serious passion for UI effects, animations and creating
              intuitive,
              <br />
              dynamic user experiences. Let's make something special.
            </ProfileDescription>
          </Profile>
          <TechStackContainer
            variants={TechStackContainerVar}
            initial="start"
            animate={isVisible ? 'end' : 'start'}
          >
            {techList.map(techInfo => (
              <TechItem {...techInfo} />
            ))}
          </TechStackContainer>
        </ProfileContainer>
      </Wrapper>
    </Root>
  );
};
