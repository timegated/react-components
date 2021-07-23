import React from 'react'
import { spacingMap } from '../utils/spacingMap';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  gap: ${(props) => spacingMap[props.gutter] ?? spacingMap.lg};
  grid-template-columns: 1fr 1fr;
`;

const Split = ({ gutter, children }) => {
  return (
    <Grid gutter={gutter}>
      {children}
    </Grid>
  );
};

export default Split;
