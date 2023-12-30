import styled from 'styled-components';
import { HEADER_HEIGHT } from '../constants/layout';
import { Link } from 'react-scroll';
import { ReactScrollLinkProps } from 'react-scroll/modules/components/Link';

const Root = styled.header`
  @media (max-width: 768px) {
    display: none;
  }
  position: fixed;
  display: flex;
  top: 0;
  z-index: 10;
  height: ${HEADER_HEIGHT}px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  /* border-radius: 2px 2px 15px 15px; */
  color: ${props => props.theme.bgColor};
`;
const NavBar = styled.nav`
  position: absolute;
  height: 100%;
  width: 40%;
  right: 10%;
  /* background-color: red; */
`;
const Items = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;
`;

const CommonLinkProps: Omit<ReactScrollLinkProps, 'to'> = {
  smooth: true,
  duration: 750,
  spy: true,
  activeStyle: { opacity: 1 },
  offset: -50,
};

const LinkIdList = ['About', 'Projects', 'Contact', 'Fifth'];
const StyledLink = styled(Link)`
  font-size: 18px;
  place-self: center;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  font-weight: ${props => (props.to === 'Banner' ? 'bold' : 'normal')};
  margin-left: ${props => (props.to === 'Banner' ? '10%' : '0')};
`;
export const Header = () => {
  return (
    <Root>
      <StyledLink to="Banner" {...CommonLinkProps}>
        LSH's PortFolio
      </StyledLink>
      <NavBar>
        <Items>
          {LinkIdList.map((id: string) => (
            <StyledLink to={id} {...CommonLinkProps}>
              {id}
            </StyledLink>
          ))}
        </Items>
      </NavBar>
    </Root>
  );
};
