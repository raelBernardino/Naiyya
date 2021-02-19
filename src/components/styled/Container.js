import styled from 'styled-components';

export const Container = styled.div`
  width: ${p => p.width ? p.width : "100%"};
  height: ${p => p.height ? p.height : "100vh"};
  padding: ${p => p.padding};
  background-color: ${p => p.backgroundColor};
  background-image: url(${p => p.backgroundImage});
  position: relative;
  `;