import React from 'react'
import {
  Table as MUITable,
  TableCell,
  TableRow,
  Link,
} from '@material-ui/core';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

/**
 * This is a table component that can take in both flat and nested objects
 *  
 * @returns {React.Component}
 */
const TableV2 = ({ data }) => {
  return (
    <MUITable>
      <TableHeader data={data} />
      <TableBody  data={data} />
    </MUITable>
  )
}

export default TableV2
