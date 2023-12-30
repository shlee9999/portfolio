import { TECH_ITEM_HEIGHT } from 'constants/layout';
import { Variants, motion } from 'framer-motion';
import styled from 'styled-components';

const Root = styled.div`
  height: ${TECH_ITEM_HEIGHT}px;
  display: flex;
  background-color: #eeeeee;
`;
const Tech = styled.span`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #04c2c9;
  color: white;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 900;
`;
interface PercentageProps {
  percentage: number;
}
const PercentageWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;
const PercentageBar = styled(motion.div)<PercentageProps>`
  background-color: #00a1a7;
  width: ${props => props.percentage}%;
`;
const PercentageTypo = styled.p`
  color: gray;
  font-size: 10px;
  margin-right: 8px;
  line-height: ${TECH_ITEM_HEIGHT}px;
`;
interface TechItemProps {
  tech: string;
  percentage: number;
}

export const TechItem = ({ tech, percentage }: TechItemProps) => {
  const PercentageBarVar: Variants = {
    start: {
      width: 0,
    },
    end: {
      width: percentage + '%',
      transition: {
        type: 'spring',
        duration: 1.5,
      },
    },
  };
  return (
    <Root>
      <Tech>{tech}</Tech>
      <PercentageWrapper>
        <PercentageBar variants={PercentageBarVar} percentage={percentage} />
        <PercentageTypo>{percentage}%</PercentageTypo>
      </PercentageWrapper>
    </Root>
  );
};
