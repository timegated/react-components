import React from 'react';
import DynamicTable from '../../components/Tables/DynamicTable/DynamicTable';
import TableV2 from '../../components/Tables/TableV2/TableV2';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { dataFormatter } from '../../utils/dataFormatter';
import data from '../../dummy/language';

const Tables = () => {
  console.log('Object Entries', dataFormatter(data));
  return (
    <>
    <Container>
      <Typography component="h1">Dynamic Table</Typography>
      <DynamicTable />
    </Container>
    <Container>
      <TableV2 data={data} />
    </Container>
    </>
  )
};

export default Tables;
