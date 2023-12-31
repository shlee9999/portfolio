import ReactModal, { Styles } from 'react-modal';
import styled from 'styled-components';
import { Button } from './common/Button';

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
  background-color: tomato;
  width: 100%;
  height: 60%;
  border-bottom: 3px solid black;
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
interface ProjectModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}
export const ProjectModal = ({
  isModalOpen,
  closeModal,
}: ProjectModalProps) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customModalStyle}
    >
      <ImgSlider />
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
