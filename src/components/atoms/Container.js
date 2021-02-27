import styled from 'styled-components';

export const Container = styled.div`
  width: ${p => p.width ? p.width : "100%"};
  height: ${p => p.height ? p.height : "100vh"};
  padding: ${p => p.padding};
  background-color: ${p => p.backgroundColor};
  background-image: url(${p => p.backgroundImage});
  justify-content: ${p => p.justifyContent};
  align-items: ${p => p.alignItems};
  display: ${p => p.flex && "flex"};
  flex-direction: ${p => p.column ? "column" : "row"};
  box-sizing: border-box;
  position: relative;
  background-size: cover;
  background-position: ${p => p.position || "center"};
  flex: ${p => p.flexNumber};
  `;