import React from 'react';
import styled from 'styled-components';
import { colors } from '../atoms';

const StyledButton = styled.div`
  position: relative;
  width: ${p => p.width ? p.width : "150px"};
  height: ${p => p.height ? p.height : "50px"};
  margin: ${p => p.margin && p.margin};
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  `;

const StyledButtonBackground = styled.div`
  width: ${p => p.width ? p.width : "150px"};
  height: ${p => p.height ? p.height : "50px"};
  margin: ${p => p.margin && p.margin};
  position: absolute;
  background-color: ${p => p.dark ? "#000" : colors.mist1};
  transform: translateX(${p => p.isHovered ? "0%" : "-100%"});
  transition: .75s;
  top: 0;
  left: 0;
`;

export const Button = ({ children, width, height, margin, dark }) => {
  const [isHovered, setIsHovered] = React.useState(false)
  return (
    <StyledButton
      width={width}
      height={height}
      margin={margin}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {children}
      <StyledButtonBackground
        width={width}
        height={height}
        margin={margin}
        isHovered={isHovered} />
    </StyledButton>
  )
}