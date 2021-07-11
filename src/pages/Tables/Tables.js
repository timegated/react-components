import React from 'react';
import DynamicTable from '../../components/Tables/DynamicTable/DynamicTable';
import TableV2 from '../../components/Tables/TableV2/TableV2';
import TableV3 from '../../components/Tables/TableV3/TableV3';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { dataFormatter } from '../../utils/dataFormatter';
import data from '../../dummy/language';

const Tables = () => {
  const entries = dataFormatter(data).slice(2);
  return (
    <>
    <Container>
      <Typography component="h1">Dynamic Table</Typography>
      <DynamicTable />
    </Container>
    <Container>
      {entries.map((item, index) => {
        console.log(item);
        return (
          <TableV2 key={index} data={item} />
        )
      })}
    </Container>
    <Container>
      <TableV3 data={data} />
    </Container>
    </>
  )
};

export default Tables;
