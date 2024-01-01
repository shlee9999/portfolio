import ReactModal, { Styles } from 'react-modal';
import styled from 'styled-components';
import { Button } from './common/Button';
import { useEffect, useState } from 'react';
import { projectList } from 'constants/projectList';

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
  content: {
    margin: '0 auto',
    width: '35%',
    height: '80%',
    boxShadow: '2px 2px 2px rgba(0,0,0,0.3)',
    padding: 0,
    border: 0,
  },
};
const ImgSlider = styled.div`
  position: relative;
  display: flex;
  height: 60%;
  border-bottom: 3px solid black;
  overflow: hidden;
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
`;
const Description = styled.p`
  font-size: 15px;
`;
const ViewButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 140px;
  height: 40px;
  font-size: 15px;
  font-weight: 600;
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
const ProjectImg = styled.div<{ url: string }>`
  width: 35vw;
  height: 100%;
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  transition: transform 1s ease;
  flex-shrink: 0;
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
  const onClickPrev = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(prev => prev - 1);
  };
  const onClickNext = () => {
    if (currentIndex === projectList[index].imgUrlList.length - 1) return;
    setCurrentIndex(prev => prev + 1);
  };

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customModalStyle}
    >
      <ImgSlider>
        {projectList[index].imgUrlList.map(currentImgUrl => (
          <ProjectImg
            url={currentImgUrl}
            style={{
              transform: `translateX(${-100 * currentIndex}%)`,
            }}
          />
        ))}
        <PrevButton onClick={onClickPrev}>&larr;</PrevButton>
        <NextButton onClick={onClickNext}>&rarr;</NextButton>
      </ImgSlider>
      <ViewButton
        style={{
          bgColor: '#E31B6D',
          textColor: 'white',
          invertedBgColor: 'white',
          invertedTextColor: '#E31B6D',
        }}
      >
        View Site
      </ViewButton>
    </ReactModal>
  );
};
