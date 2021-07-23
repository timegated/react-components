import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  gap: ${(props) => props.gutter ?? "1rem"};
`;

const Stack = ({ children, gutter }) => {
  return (
    <Grid gutter={gutter}>
      {children}
    </Grid>
  );
};

export default Stack;
