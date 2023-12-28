import { FC } from 'react';
import styled from 'styled-components';

const Root = styled.div``;

type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = () => {
  return <Root>Header</Root>;
};
