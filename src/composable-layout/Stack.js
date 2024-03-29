import React from 'react';
import { spacingMap } from '../utils/spacingMap';
import styled from 'styled-components';


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
