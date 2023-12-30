import styled from 'styled-components';
import bannerImg from 'assets/banner.jpg';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-scroll';
const Root = styled.div`
  height: 100vh;
  padding: 30px 0 30px 0;
  width: 100%;
  background-image: url(${bannerImg});
  background-size: cover;
  background-attachment: fixed;
  background-position-x: 50%;
  background-position-y: -50px;
  background-repeat: no-repeat;
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
      <Title>SeongHoon's PortFolio</Title>
      <Button variants={BtnVariant} whileTap="click" whileHover="hover">
        <Link to="AboutMe" smooth duration={750}>
          About Me!
        </Link>
      </Button>
    </Root>
  );
};
