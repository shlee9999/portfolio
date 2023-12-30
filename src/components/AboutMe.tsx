import styled from 'styled-components';
import { Header } from './Header';
import { techList } from 'constants/techList';
import { HEADER_HEIGHT } from 'constants/layout';
import { TechItem } from './TechItem';
import { Variants, motion } from 'framer-motion';
import { useScrollAnimation } from 'hooks/useScrollAnimation';
import { Title } from './Title';

const Root = styled.div`
  height: 100vh;
  padding-bottom: 30px;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  padding: 10px 20% 10px 20%;
  height: calc(100vh - ${HEADER_HEIGHT}px);
`;

const ItemContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;
const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
`;
// AboutItem 컴포넌트 만들기
const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  flex-basis: 150px;
  flex-grow: 1;
`;

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
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
  background-color: tomato;
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
    <Root>
      <Header />
      <Wrapper>
        <Title>About</Title>
        <ItemContainer>
          <Items>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
            <Item>4</Item>
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
            {/* 애니메이션 넣어보기 */}
            {techList.map(techInfo => (
              <TechItem {...techInfo} />
            ))}
          </TechStackContainer>
        </ProfileContainer>
      </Wrapper>
    </Root>
  );
};
