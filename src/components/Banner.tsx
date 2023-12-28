import styled from 'styled-components';
import bannerImg from 'assets/banner.jpg';
import { motion, Variants } from 'framer-motion';
const Root = styled(motion.div)`
  height: 70vh;
  background-color: tomato;
  padding: 30px 0 30px 0;
  width: 100%;
  height: 500px;
  background-color: tomato;
  background-image: url(${bannerImg});
  background-size: cover;
  background-attachment: fixed;
  background-position-x: 50%;
  background-position-y: -50px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.p`
  font-size: 30px;
  font-weight: 800;
  text-align: center;
`;
const Button = styled(motion.button)`
  width: 100px;
  height: 50px;
  background-color: #965d40;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 800;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.6);
`;
const RootVariant: Variants = {
  start: {
    opacity: 0,
    y: 20,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
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
    <Root variants={RootVariant} initial="start" animate="end">
      <Title>SeongHoon's PortFolio</Title>
      <Button variants={BtnVariant} whileTap="click" whileHover="hover">
        About Me!
      </Button>
    </Root>
  );
};
