import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from './';

const FadeContainer = styled(Container)``;

export const FadeIn = ({
  children,
  width,
  height,
  padding,
  backgroundColor,
  backgroundImage,
  justifyContent,
  alignItems,
  column,
  flex,
  position,
  flexNumber,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current)
  }, [])
  return (
    <FadeContainer
      width={width}
      height={height}
      padding={padding}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      justifyContent={justifyContent}
      alignItems={alignItems}
      column={column}
      flex={flex}
      position={position}
      flexNumber={flexNumber}
      className={`fade-in-section ${isVisible  && 'is-visible'}`}
      ref={domRef}
    >
      {children}
    </FadeContainer>
  )
}