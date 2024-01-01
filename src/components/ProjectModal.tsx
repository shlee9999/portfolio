import ReactModal, { Styles } from 'react-modal';
import styled from 'styled-components';
import { Button } from './common/Button';
import { useState } from 'react';
import { projectList } from 'constants/projectList';
import { MOBILE_VIEWPORT_SIZE } from 'constants/layout';
import { TechStacks } from './common/TechStacks';
import { ReactComponent as CloseButtonImg } from 'assets/close_button.svg';
const Root = styled(ReactModal)`
  @media (max-width: ${MOBILE_VIEWPORT_SIZE}px) {
    height: 100%;
    width: 100%;
  }
  position: fixed;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 720px;
  box-shadow: '2px 2px 2px rgba(0,0,0,0.3)';
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }
`;
const customModalStyle: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 11,
  },
};
const ImgSlider = styled.div`
  position: relative;
  display: flex;
  height: 50%;
  border-bottom: 3px solid black;
  overflow: hidden;
`;
const TypoContainer = styled.div`
  position: relative;
  padding: 20px;
  height: 50%;
`;

const Title = styled.p`
  font-size: 23px;
  font-weight: 600;
`;
const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
const Line = styled.hr`
  height: 1px;
  background-color: rgb(0, 0, 0, 0.5);
  margin-top: 7px;
`;
const Description = styled.p`
  font-size: 15px;
  margin-top: 5px;
  line-height: 18px;
  letter-spacing: 0.2px;
`;
const ViewButton = styled(Button)`
  width: 140px;
  height: 40px;
  font-size: 15px;
  font-weight: 600;
  margin-top: 10px;
`;
const ImgControlButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  font-size: 30px;
  font-weight: 900;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: rgb(0, 0, 0, 0.8);
  }
  &:active {
    width: 49px;
  }
`;
const NextButton = styled(ImgControlButton)`
  bottom: 0;
  right: 0;
`;
const PrevButton = styled(ImgControlButton)`
  bottom: 0;
  left: 0;
`;
interface ProjectImgProps {
  $url: string;
}
const ProjectImg = styled.div<ProjectImgProps>`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$url});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  transition: transform 1s ease;
  flex-shrink: 0;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CloseButton = styled(CloseButtonImg)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 1;
  color: red;
`;
interface ProjectModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  index: number;
}
export const ProjectModal = ({
  isModalOpen,
  closeModal,
  index,
}: ProjectModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectInfo = projectList[index];
  const onClickPrev = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(prev => prev - 1);
  };
  const onClickNext = () => {
    if (currentIndex === projectInfo.imgUrlList.length - 1) return;
    setCurrentIndex(prev => prev + 1);
  };

  return (
    <Root
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customModalStyle}
      ariaHideApp={false}
    >
      <ImgSlider>
        {projectInfo.imgUrlList.map((currentImgUrl, index) => (
          <ProjectImg
            key={index}
            $url={currentImgUrl}
            style={{
              transform: `translateX(${-100 * currentIndex}%)`,
            }}
          />
        ))}
        <PrevButton onClick={onClickPrev}>&larr;</PrevButton>
        <NextButton onClick={onClickNext}>&rarr;</NextButton>
      </ImgSlider>
      <TypoContainer>
        <TitleWrapper>
          <Title>{projectInfo.title}</Title>
          <TechStacks techStacks={projectInfo.techStacks} />
        </TitleWrapper>
        <Line />
        <Description>{projectInfo.description}</Description>
        <ButtonContainer>
          <ViewButton
            style={{
              $bgColor: '#E31B6D',
              $textColor: 'white',
              $invertedBgColor: 'white',
              $invertedTextColor: '#E31B6D',
            }}
          >
            View Site
          </ViewButton>
          <CloseButton
            stroke="#b5b5b5"
            width={30}
            height={30}
            onClick={closeModal}
          />
        </ButtonContainer>
      </TypoContainer>
    </Root>
  );
};
