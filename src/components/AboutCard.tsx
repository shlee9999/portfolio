import { IAboutCard } from 'constants/aboutCardList';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: aliceblue;
  flex-basis: 100px;
  flex-grow: 1;
  min-height: 200px;
`;

const CardImg = styled.div`
  background-image: url(https://source.unsplash.com/random);
  width: 100px;
  height: 100px;
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

export const AboutCard = ({ title, description }: IAboutCard) => {
  return (
    <Root>
      <CardImg />
      <TypoContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TypoContainer>
    </Root>
  );
};
