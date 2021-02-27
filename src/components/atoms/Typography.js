import React from 'react';
import styled from 'styled-components';

const size = {
  xxl: "36px",
  xl: "32px",
  lg: "21px",
  md: "18px",
  sm: "15px",
  xs: "12px"
}

const StyledTypography = styled(({ tag, children, ...props }) => React.createElement(tag, props, children))`
  font-family: ${p => p.title ? "Belleza" : "Lato"};
  font-weight: ${p => p.weight || "300"};
  font-size: ${p => size[p.size] || size["sm"] || p.size};
  color: ${p => p.color || "black"};
  width: ${p => p.width};
  line-height: 1.5;
  padding: ${p => p.padding};
  text-align: ${p => p.textAlign};
  text-decoration: none;
  margin: ${p => p.margin};
  z-index: ${p => p.zindex};
`

export const Typography = ({ children, zindex, style, tag, weight, width, size, color, textAlign, padding, margin, title }) => (
  <StyledTypography
    tag={tag || "span"}
    zindex={zindex}
    weight={weight}
    size={size}
    color={color}
    padding={padding}
    margin={margin}
    title={title}
    width={width}
    textAlign={textAlign}
    style={style}
  >
    {children}
  </StyledTypography>
)