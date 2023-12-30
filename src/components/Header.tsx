import styled from 'styled-components';
import { HEADER_HEIGHT } from '../constants/layout';
import { Link } from 'react-scroll';
import { ReactScrollLinkProps } from 'react-scroll/modules/components/Link';

const Root = styled.header`
  padding-top: 10px 0 5px 0;
  position: sticky;
  top: 0px;
  left: 40%;
  height: ${HEADER_HEIGHT}px;
  background-color: rgba(0, 0, 0, 0.6);
  width: 50%;
  color: ${props => props.theme.bgColor};
  border-radius: 2px 2px 15px 15px;
  z-index: 10;
`;
const Items = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
`;

const CommonLinkProps: Omit<ReactScrollLinkProps, 'to'> = {
  smooth: true,
  duration: 750,
  spy: true,
  activeStyle: { opacity: 1 },
};

const LinkIdList = ['Banner', 'AboutMe', 'Projects', 'Fourth', 'Fifth'];
const StyledLink = styled(Link)`
  place-self: center;
  opacity: 0.6;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
export const Header = () => {
  return (
    <Root>
      <Items>
        {LinkIdList.map((id: string) => (
          <StyledLink to={id} {...CommonLinkProps}>
            {id}
          </StyledLink>
        ))}
      </Items>
    </Root>
  );
};
