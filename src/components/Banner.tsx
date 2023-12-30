import styled from 'styled-components';
import bannerImg from 'assets/banner.jpg';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-scroll';
const Root = styled.div`
  position: relative;
  height: 70vh;
  padding: 30px 0 50px 0;
  width: 100%;
  background-image: url(${bannerImg});
  background-size: cover;
  background-attachment: fixed;
  background-position-x: 50%;
  background-position-y: -150px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    );
  }
`;
const Line = styled.hr`
  width: 60px;
  height: 4px;
  background-color: #f24516;
  z-index: 1;
  margin: 15px 0;
`;
const TitleContainer = styled.div`
  z-index: 2;
`;
const Title = styled.p`
  color: white;
  font-size: 50px;
  font-weight: 800;
  line-height: 70px;
  text-align: center;
`;
const DescriptionContainer = styled.div`
  z-index: 2;
`;
const Description = styled.p`
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-align: center;
  color: white;
  opacity: 0.7;
`;
const Button = styled(motion.button)`
  position: absolute;
  color: white;
  z-index: 2;
  width: 150px;
  height: 50px;
  background-color: #f24516;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 800;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.6);
  bottom: 70px;
`;

const BtnVariant: Variants = {
  hover: {
    y: -5,
  },
  click: {
    y: 0,
  },
};
export const Banner = () => {
  return (
    <Root id="Banner">
      <TitleContainer>
        <Title>-이성훈-</Title>
        <Title>웹 개발자 포트폴리오</Title>
      </TitleContainer>
      <Line />
      <DescriptionContainer>
        <Description>안녕하세요.</Description>
        <Description> 프론트 엔드 개발자를 준비 중인 이성훈입니다.</Description>
        <Description>
          UX에 민감한 매우 꼼꼼한 성격과 성실함이 저의 장점입니다.
        </Description>
      </DescriptionContainer>
      <Button variants={BtnVariant} whileTap="click" whileHover="hover">
        <Link to="About" smooth duration={750}>
          더 알아보기 &darr;{' '}
        </Link>
      </Button>
    </Root>
  );
};
