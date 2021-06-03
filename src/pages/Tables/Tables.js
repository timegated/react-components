import React from 'react';
import DynamicTable from '../../components/Tables/DynamicTable/DynamicTable';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';

const Tables = () => {
  return (
    <Container>
      <Typography component="h1">Dynamic Table</Typography>
      <DynamicTable />
    </Container>
  )
};

export default Tables;
