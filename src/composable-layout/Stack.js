import React from 'react';
import styled from 'styled-components';

// Based on t-shirt sizes
const spacingMap = {
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "1rem",
  xl: "2rem",
  xxl: "4rem"
};

const Grid = styled.div`
  display: grid;
  gap: ${(props) => spacingMap[props.gutter] ?? spacingMap.lg};
`;

const Stack = ({ children, gutter }) => {
  return (
    <Grid gutter={gutter}>
      {children}
    </Grid>
  );
};

export default Stack;
