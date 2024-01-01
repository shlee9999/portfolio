import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Root = styled.button<ButtonStyle>`
  cursor: pointer;
  border: 1px solid ${props => props.$invertedBgColor ?? '#e31b6d'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.$bgColor ?? 'transparent'};
  color: ${props => props.$textColor ?? 'black'};
  &:hover {
    background-color: ${props => props.$invertedBgColor ?? '#e31b6d'};
    color: ${props => props.$invertedTextColor ?? 'white'};
  }
  transition-property: background-color, color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  text-transform: uppercase;
  font-size: 25px;
`;

interface ButtonProps {
  children?: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  style?: ButtonStyle;
  className?: string;
}

interface ButtonStyle {
  $bgColor?: string;
  $invertedBgColor?: string;
  $textColor?: string;
  $invertedTextColor?: string;
}

export const Button = ({
  onClick,
  children,
  style,
  className,
}: ButtonProps) => {
  return (
    <Root {...style} onClick={onClick} className={className}>
      {children}
    </Root>
  );
};
