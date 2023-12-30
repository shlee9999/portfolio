import { Link } from 'react-scroll';
import styled from 'styled-components';
// import { ReactComponent as InstagramIcon } from 'assets/instagram.svg';
// import { ReactComponent as FacebookIcon } from 'assets/facebook.svg';
const Root = styled.div`
  padding: 70px 0 80px 0;
  position: relative;
  height: 30vh;
  background-color: #1b242f;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const TopButton = styled.button`
  position: absolute;
  top: -20px;
  left: 50%;
  border: none;
  transform: translate(-50%);
  width: 40px;
  height: 43px;
  background-color: #e31b6d;
  cursor: pointer;
`;

// const IconContainer = styled.div`
//   margin: 0 auto;
//   width: 340px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 15px;
// `;
// const IconButton = styled.button`
//   cursor: pointer;
//   border: none;
//   width: 55px;
//   height: 55px;
//   background-color: #262f38;
// `;
const CopyRight = styled.p`
  text-align: center;
  color: #8f9aa7;
  text-transform: uppercase;
  span {
    color: #e31b6d;
    opacity: 1;
  }
`;
export const Footer = () => {
  return (
    <Root>
      <TopButton>
        <Link to="Banner" smooth duration={500}>
          Top
        </Link>
      </TopButton>
      {/* <IconContainer>
        <IconButton>
          <InstagramIcon fill="white" width={30} height={30} />
        </IconButton>
        <IconButton>
          <FacebookIcon fill="white" width={20} height={20} />
        </IconButton>
        <IconButton>
          <InstagramIcon fill="white" width={30} height={30} />
        </IconButton>
        <IconButton>
          <InstagramIcon fill="white" width={30} height={30} />
        </IconButton>
      </IconContainer> */}
      <CopyRight>
        SeongHoon Lee <span>&copy;2023</span>
      </CopyRight>
    </Root>
  );
};
