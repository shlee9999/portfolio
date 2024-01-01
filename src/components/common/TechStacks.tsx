import styled from 'styled-components';

const Root = styled.div`
  text-align: center;
`;
const TechStack = styled.span`
  color: #e31b6d;
  text-align: center;
  font-size: 20px;
  &:not(:last-child)::after {
    content: '/';
  }
`;
interface TechStacksProps {
  techStacks: string[];
}
export const TechStacks = ({ techStacks }: TechStacksProps) => {
  return (
    <Root>
      {techStacks.map((techStack, index) => (
        <TechStack key={index}>{techStack}</TechStack>
      ))}
    </Root>
  );
};
