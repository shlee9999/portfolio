import styled from 'styled-components';
import { techList } from 'constants/techList';
import { TechItem } from './TechItem';
import { Variants, motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { Title } from './Title';
import { AboutCard } from './AboutCard';
import { aboutCardList } from 'constants/aboutCardList';
import idPhotoImg from 'assets/id_photo.jpg';
const Root = styled.div`
  min-height: 100vh;
  padding-bottom: 30px;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;
  padding: 70px 10% 30px 10%;
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

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const ProfileImg = styled.img`
  background-color: tomato;
  width: 220px;
`; // background-image 사용
const ProfileTitle = styled.p`
  text-align: center;
  font-size: 23px;
  font-weight: 600;
`;
const ProfileDescription = styled.p`
  text-align: center;
  padding: 0 20px;
  font-size: 16px;
  letter-spacing: 0.8px;
  font-weight: 300;
  line-height: 20px;
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
    <Root id="About">
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
            <ProfileImg src={idPhotoImg} />
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
